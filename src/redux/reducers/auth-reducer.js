import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'AUTH/SET_USER_DATA';
const SET_CAPTCHA = 'AUTH/SET_CAPTCHA';

let initialState = {
    userID: null,
    email: null,
    login: null,
    userPhoto: null,
    isAuth: false,
    authError: null,
    captcha: {
        error: false,
        imageUrl: undefined
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: {
                    error: true,
                    imageUrl: action.url
                }
            }
        default:
            return state
    }
}

const setAuthUserData = (isAuth, userID, email, login, userPhoto) => ({
    type: SET_USER_DATA,
    payload: {userID, email, login, userPhoto, isAuth}
})

export const getAuthUserData = () => async dispatch => {
    let response = await authAPI.getAuthInfo()
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            response = await authAPI.getAuthProfile(id)
            dispatch(setAuthUserData(true, id, email, login, response.data.photos.small))
        }
}

const setCaptcha = url => ({
    type: SET_CAPTCHA,
    url
})

export const login = ({email, password, rememberMe, captcha}) => async dispatch => {
    try {
        let response = await authAPI.sendLoginRequest(email, password, rememberMe, captcha)

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else if (response.data.resultCode > 0 && response.data.resultCode < 10) {
            dispatch(stopSubmit('loginForm', {_error: 'Проверьте логин и/или пароль'}))
        }

        if (response.data.resultCode === 10) {
            dispatch(stopSubmit('loginForm', {_error: 'Проверьте логин и/или пароль, а также введите символы изображенные на картинке в поле ниже'}))
            response = await authAPI.getCaptchaImage()
            dispatch(setCaptcha(response.data.url))
        }
    } catch (e) {
        console.warn(e)
    }
}

export const logout = () => async dispatch => {
    let response = await authAPI.sendLogoutRequest()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(false, null, null, null, null))
    }
}

export default authReducer
import { profileAPI } from "../../api/api";
import { reset } from "redux-form";

const ADD_POST = 'PROFILE/ADD_POST'
const DELETE_POST = 'PROFILE/DELETE_POST'
const LIKE_POST = 'PROFILE/LIKE_POST'
const SET_USER_PROFILE = 'PROFILE/SET_USER_PROFILE'
const SET_USER_STATUS = 'PROFILE/SET_USER_STATUS'
const SET_CHANGE_STATUS_RESULT_CODE = 'PROFILE/SET_CHANGE_STATUS_RESULT_CODE'
const SET_PHOTO_SUCCESS = 'PROFILE/SET_PHOTO_SUCCESS'
const SET_AVATAR_RESULT_CODE = 'PROFILE/SET_AVATAR_RESULT_CODE'

let initialState = {
    posts: [],
    profile: null,
    status: null,
    statusChangeResult: undefined,
    avatarChangeResult: undefined
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length,
                    message: action.text,
                    likesCount: null
                }]
            }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            }
        }
        case LIKE_POST:
            return {
                ...state,
                posts: state.posts.map(post => action.id === post.id
                    ? {
                        ...post,
                        likesCount: ++post.likesCount
                    } : post)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_CHANGE_STATUS_RESULT_CODE:
            return {
                ...state,
                statusChangeResult: action.resultCode
            }
        case SET_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.avatar}
            }
        default:
            return state
    }
}

export const setNewPost = text => ({
    type: ADD_POST,
    text
})

export const deletePost = id => ({
    type: DELETE_POST,
    id
})

export const addPost = text => dispatch => {
    dispatch(setNewPost(text))
    dispatch(reset('postForm'))
}

export const likePost = (id) => ({
    type: LIKE_POST,
    id
})

const setUserProfile = profile => ({
    type: SET_USER_PROFILE,
    profile: profile
})

export const getUserProfile = userId => async dispatch => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

const setStatusSuccess = status => ({
    type: SET_USER_STATUS,
    status
})

export const getUserStatus = userId => async dispatch => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatusSuccess(response.data))
}

const setChangeStatusResponse = resultCode => ({
    type: SET_CHANGE_STATUS_RESULT_CODE,
    resultCode,
})

export const updateUserStatus = status => async dispatch => {
    try {
        let response = await profileAPI.setStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatusSuccess(status))
            dispatch(setChangeStatusResponse(true))
        }
    } catch (e) {
        console.warn(e)
        dispatch(setChangeStatusResponse(false))
    } finally {
        setTimeout(function () {
            dispatch(setChangeStatusResponse(undefined))
        }, 3000)
    }
}

const setAvatarSuccess = avatar => ({
    type: SET_PHOTO_SUCCESS,
    avatar
})

const setChangeAvatarResponse = resultCode => ({
    type: SET_AVATAR_RESULT_CODE,
    resultCode,
})

export const updateUserAvatar = avatar => async dispatch => {
    try {
        let response = await profileAPI.setAvatar(avatar)
        if (response.data.resultCode === 0) {
            dispatch(setAvatarSuccess(response.data.data.photos))
            dispatch(setChangeAvatarResponse(true))
        }
    } catch (e) {
        console.warn(e)
        dispatch(setChangeAvatarResponse(false))
    } finally {
        setTimeout(function () {
            dispatch(setChangeAvatarResponse(undefined))
        }, 3000)
    }
}

export default profileReducer
export const getAuthUserLogin = state => {
    return state.auth.login
}

export const getAuthUserID = state => {
    return state.auth.userID
}

export const getAuthUserPhoto = state => {
    return state.auth.userPhoto
}

export const getIsAuth = state => {
    return state.auth.isAuth
}

export const getCaptchaURL = state => {
    return state.auth.captcha.imageUrl
}
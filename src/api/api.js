import * as axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '1f6ea116-9c88-4045-ba83-8df91e8a32ba'

        // autofan "API-KEY": '1f6ea116-9c88-4045-ba83-8df91e8a32ba'
        // pisulek "API-KEY": '3e6eaf49-0b00-48a5-bc21-0cbba1e73af6'
    }
})

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    unfollowUserRequest(userID) {
        return instance.delete(`follow/${userID}`)
    },
    followUserRequest(userID) {
        return instance.post(`follow/${userID}`)
    }
}

export const authAPI = {
    getAuthInfo() {
        return instance.get(`auth/me`)
    },
    getAuthProfile(id) {
        return instance.get(`profile/${id}`)
    },
    sendLoginRequest(email, password, rememberMe, captcha) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    getCaptchaImage() {
        return instance.get(`security/get-captcha-url`)
    },
    sendLogoutRequest() {
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getProfile(userID) {
        return instance.get(`profile/${userID}`)
    },
    getStatus(userID) {
        return instance.get(`profile/status/${userID}`)
    },
    setStatus(status) {
        return instance.put(`profile/status`, {status})
    },
    setAvatar(avatar) {
        let formData = new FormData();
        formData.append('image', avatar)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

const weatherInstance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/'
})

const weatherProfileId = 'b979e8592b62a595eec4ec0cf4ac691f'

export const weatherAPI = {
    getWeatherData(cityName) {
        return weatherInstance.get(`weather?q=${cityName}&appid=${weatherProfileId}&units=metric&lang=ru`)
    }
}
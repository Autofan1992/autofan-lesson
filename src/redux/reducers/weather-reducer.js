import {weatherAPI} from "../../api/api";

const SET_WEATHER_DATA = 'WEATHER/SET_WEATHER_DATA'
const TOGGLE_FETCHING = 'WEATHER/TOGGLE_FETCHING'
const SET_CITY = 'WEATHER/SET_CITY'

let initialState = {
    weatherInfo: {
        weather: [],
        temperature: null,
        temperatureFeels: null,
        windSpeed: null,
        sunriseDate: null,
        sunsetDate: null,
        country: null,
        weatherCity: null,
    },
    isFetching: false,
    cityName: '',
    placeholder: 'Введите название города'
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER_DATA:
            return {
                ...state,
                weatherInfo: {
                    weather: [...action.weatherData.weather],
                    temperature: action.weatherData.main.temp,
                    temperatureFeels: action.weatherData.main.feels_like,
                    windSpeed: action.weatherData.wind.speed,
                    sunriseDate: action.weatherData.sys.sunrise,
                    sunsetDate: action.weatherData.sys.sunset,
                    country: action.weatherData.sys.country,
                    weatherCity: action.weatherData.name
                },
            }
        case
        SET_CITY:
            return {
                ...state,
                cityName: action.cityName
            }
        case
        TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state
    }
}

export const setWeatherData = (weatherData) => ({type: SET_WEATHER_DATA, weatherData})
export const setCity = (cityName) => ({type: SET_CITY, cityName})
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})

export const getWeatherData = (cityName) => async dispatch => {
    dispatch(toggleFetching(true))
    dispatch(setCity(cityName))
    if (cityName.trim()) {
        try {
            let response = await weatherAPI.getWeatherData(cityName)
            dispatch(toggleFetching(false))
            dispatch(setWeatherData(response.data))
        } catch (e) {
            console.warn(e)
            alert('Город не найден')
        }
    } else {
        alert('Введите название города')
    }
    dispatch(toggleFetching(false))
}

export default weatherReducer
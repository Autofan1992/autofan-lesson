import {connect} from "react-redux";
import Weather from "./Weather";
import {getWeatherData, setCity} from "../../redux/reducers/weather-reducer";
import Preloader from "../common/preloader/Preloader";
import WeatherForm from "./WeatherForm";
import styles from './Weather.module.scss'

function WeatherContainer(props) {
    const handleInputChange = e => {
        props.setCity(e.target.value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        props.getWeatherData(props.cityName)
    }

    return (
        <div className={styles.weatherWrapper}>
            <WeatherForm
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
                cityName={props.cityName}
                placeholder={props.placeholder}
            />
            {props.fetchingStatus
                ? <Preloader/>
                : props.weatherCity && <Weather
                weather={props.weather}
                temperature={props.temperature}
                temperatureFeels={props.temperatureFeels}
                windSpeed={props.windSpeed}
                sunriseDate={props.sunriseDate}
                sunsetDate={props.sunsetDate}
                country={props.country}
                weatherCity={props.weatherCity}
            />
            }
        </div>
    )
}

let mapStateToProps = (state) => {
    let sunrise = state.weatherPage.weatherInfo.sunriseDate
    let sunset = state.weatherPage.weatherInfo.sunsetDate
    let sunriseDate = new Date(1000 * sunrise)
    let sunsetDate = new Date(1000 * sunset)

    return {
        fetchingStatus: state.weatherPage.isFetching,
        cityName: state.weatherPage.cityName,
        placeholder: state.weatherPage.placeholder,
        weather: state.weatherPage.weatherInfo.weather,
        temperature: state.weatherPage.weatherInfo.temperature,
        temperatureFeels: state.weatherPage.weatherInfo.temperatureFeels,
        windSpeed: state.weatherPage.weatherInfo.windSpeed,
        sunriseDate: sunriseDate.getHours() + ':' + sunriseDate.getMinutes() + ':' + sunriseDate.getSeconds(),
        sunsetDate: sunsetDate.getHours() + ':' + sunsetDate.getMinutes() + ':' + sunsetDate.getSeconds(),
        country: state.weatherPage.weatherInfo.country,
        weatherCity: state.weatherPage.weatherInfo.weatherCity,
    }
}

export default connect(mapStateToProps, {getWeatherData, setCity})(WeatherContainer)
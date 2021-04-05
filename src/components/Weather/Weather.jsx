function Weather(props) {
    return <>
        <div className="location mt-3">
            <h1 className="fw-bold">{props.weatherCity}, {props.country}</h1>
        </div>
        <div className="temperature">
            <div className="d-flex align-items-center">
                <div className="icon">
                    {props.weather.map((w, i) => w.icon &&
                        <img key={i} src={`http://openweathermap.org/img/wn/${w.icon}.png`} alt=""/>)}
                </div>
                <h2 className="mt-2 mb-4">Температура {Math.round(props.temperature)}, °C</h2>
            </div>
            <p><span className="fw-bold">Ощущается как:</span> {Math.round(props.temperatureFeels)} °C</p>
            <p><span className="fw-bold">Описание погоды:</span> {props.weather.map(w => w.description)}</p>
            <p><span className="fw-bold">Скорость ветра:</span> {Math.round(props.windSpeed)} м/с</p>
            <p><span className="fw-bold">Время рассвета:</span> {props.sunriseDate}</p>
            <p><span className="fw-bold">Время заката:</span> {props.sunsetDate}</p>
        </div>
    </>
}

export default Weather
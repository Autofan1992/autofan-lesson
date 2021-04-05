function WeatherForm(props) {
    return (
        <form onSubmit={props.handleFormSubmit}>
            <div className="row">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder={props.placeholder}
                        onChange={props.handleInputChange}
                        value={props.cityName}
                    />
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-primary">Поиск</button>
                </div>
            </div>
        </form>
    )
}

export default WeatherForm
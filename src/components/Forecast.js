import { connect } from 'react-redux'
import Chart from './Chart'

function Forecast(props) {
    const forecastData = props.data.map(day => {
        let dateTxt = new Date(day.dt * 1000).toString()
        dateTxt = dateTxt.slice(0, dateTxt.indexOf('GMT') -4)
        const temp = parseInt(day.main.temp) - 273
        return {
            dateTxt,
            temp
        }
    })

    const forecast = (props.errorMessage || forecastData.length === 0) ?
        <div className="forecast-display__error">{props.errorMessage}</div> :
        <div>
            <h2 className="forecast-display__header">{props.city}</h2>
            <Chart forecast={forecastData} />
        </div>

    return (
        <div className="forecast-display">
            {forecast}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        errorMessage: state.errorMessage,
        city: state.forecast.city,
        data: state.forecast.data
    }
}

export default connect(mapStateToProps)(Forecast)

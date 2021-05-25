import { connect } from 'react-redux'
import Chart from './Chart'

function Forecast(props) {
    const foreCastData = props.data.map(day => {
        let dateTxt = new Date(day.dt * 1000)
        dateTxt = `${dateTxt.getHours()}:${dateTxt.getMinutes()} ${dateTxt.getDate()} ${dateTxt.getMonth()}`
        const temp = parseInt(day.main.temp) - 273
        return {
            dateTxt,
            temp
        }
    })
    console.log(`forecast: `, foreCastData)
    const forecast = props.errorMessage ?
        <div className="forecast-error">{props.errorMessage}</div> :
        <div className="forecast-info">
            <h2>{props.city}</h2>

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
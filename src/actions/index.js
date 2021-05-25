import axios from 'axios'
import { FETCH_FORECAST, FORECAST_ERR } from './types'

export const getForecast = (city) => async dispatch => {
    try {
        if (!city) throw new Error('Wrong input')
        const requestStr = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_TOKEN}`
        const response = await axios.get(requestStr)
        dispatch({ type: FETCH_FORECAST, payload: response.data })
    } catch (error) {
        console.log(`fetching failed`, error)
        dispatch({ type: FORECAST_ERR, payload: `Failed to fetch forecast for ${city ? city : 'empty city'}` })
    }
}

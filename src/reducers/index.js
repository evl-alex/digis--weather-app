import {FETCH_FORECAST, FORECAST_ERR} from '../actions/types'

export default function reducers (state = [], action) {
    switch (action.type) {
        case FETCH_FORECAST:
            return {...state,
                forecast: {city: action.payload.city.name, data: action.payload.list},
                errorMessage: ''}
        case FORECAST_ERR:
            return {...state, errorMessage: action.payload}
        default:
            return state
    }
}
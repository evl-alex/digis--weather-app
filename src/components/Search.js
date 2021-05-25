import {useState} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

function Search(props) {
    const [city, setCity] = useState('')

    const handleSubmit = (event) => {
        props.getForecast(city)
        event.preventDefault()
    }

    return (
        <form className="forecast-search" onSubmit={handleSubmit}>
            <input type="text"
                   name="city"
                   placeholder="Enter a city"
                   value={city}
                   onChange={event => setCity(event.target.value)}
            />
            <button>Search</button>
        </form>
    )
}

export default connect(null, actions)(Search)
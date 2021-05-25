import Search from './Search'
import Forecast from './Forecast'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../reducers'

const initialStore = {
    errorMessage: '',
    forecast: {
        city: '',
        data: []
    }
}

const store = createStore(
    reducers,
    initialStore,
    applyMiddleware(thunk)
)

export default function App() {
    return (
        <Provider store={store}>
            <section className='forecast'>
                <Search />
                <Forecast />
            </section>
        </Provider>
    )
}

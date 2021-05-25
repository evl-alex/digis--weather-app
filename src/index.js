import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import './scss/main.scss'
import App from './components/App'

import reducers from './reducers'

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

store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
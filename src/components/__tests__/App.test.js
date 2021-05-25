import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import Search from '../Search'
import Forecast from '../Forecast'

let wrapped

beforeEach(() => {
    wrapped = shallow(<App />)
})

test('shows a search box', () => {
    expect(wrapped.find(Search).length).toEqual(1)
})

test('shows a forecast component', () => {
    expect(wrapped.find(Forecast).length).toEqual(1)
})

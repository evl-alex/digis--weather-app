import React from 'react'
import { mount } from 'enzyme'
import App from '../App'
import Chart from '../Chart'

let wrapped

beforeEach(() => {
    wrapped = mount(
        <App />
    )
})

afterEach(() => {
    wrapped.unmount()
})

test('If nothing was searched do not display chart and show message', () => {
    wrapped.find('input').simulate('change', {
        target: { value: '' }
    })
    wrapped.find('form').simulate('submit')
    wrapped.update()

    expect(wrapped.find(Chart).length).toEqual(0)
    expect(wrapped.find('.forecast-display__error').text()).toEqual('Failed to fetch forecast for empty city')
})

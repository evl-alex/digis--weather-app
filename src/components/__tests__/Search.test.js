import React from 'react'
import { mount } from 'enzyme'
import App from '../App'

let wrapped

beforeEach(() => {
    wrapped = mount(
        <App />
    )
})

afterEach(() => {
    wrapped.unmount()
})

test('Has input and button', () => {
    expect(wrapped.find('input').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)
})

test('Has input that user can type in', () => {
    wrapped.find('input').simulate('change', {
        target: { value: 'London' }
    })
    wrapped.update()
    expect(wrapped.find('input').prop('value')).toEqual('London')
})

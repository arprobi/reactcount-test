import React from 'react'
import { shallow } from 'enzyme'
import Home from './index.jsx'

describe('Home component', () => {
    it('Get the welcome page title', () => {
        const wrapper   = shallow(<Home />)
        const title     = wrapper.find('h1').text()
        expect(title).toEqual('Hello, world!')
    })
})
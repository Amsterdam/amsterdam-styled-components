import React from 'react'
import { shallow } from 'enzyme'
import Input from './Input'

describe('Input', () => {
  it('should render', () => {
    const component = shallow(<Input />)
    expect(component).toMatchSnapshot()
  })
})

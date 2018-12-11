import { mount } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import TextField from '../TextField'

describe('<TextField />', () => {
  it('should render', () => {
    const component = mount(<TextField />)
    expect(component).toMatchSnapshot()
  })
})

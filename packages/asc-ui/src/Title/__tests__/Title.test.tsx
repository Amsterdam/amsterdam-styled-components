import { mount } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import Title from '../Title'

describe('<Title />', () => {
  it('should render', () => {
    const component = mount(<Title />)
    expect(component).toMatchSnapshot()
  })
})

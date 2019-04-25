import * as React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'
import 'jest-styled-components'

describe('Button', () => {
  it('should render the button', () => {
    const component = shallow(<Button color="primary">Hello</Button>).dive()
    expect(component).toMatchSnapshot()
  })
})

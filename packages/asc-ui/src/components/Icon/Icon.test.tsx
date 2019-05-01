import * as React from 'react'
import { shallow } from 'enzyme'
import Icon from './Icon'
import 'jest-styled-components'

describe('Icon', () => {
  it('should render the icon', () => {
    const component = shallow(
      <Icon inline size={24} padding={4}>
        icon-content
      </Icon>,
    ).dive()
    expect(component).toMatchSnapshot()
  })
})

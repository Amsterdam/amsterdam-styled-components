import * as React from 'react'
import { shallow } from 'enzyme'
import MenuLabel from './MenuLabel'

describe('MenuLabel', () => {
  it('should render the label', () => {
    const children = 'This is a label'

    const component = shallow(<MenuLabel>{children}</MenuLabel>)

    expect(component.props().children).toEqual(children)
  })
})

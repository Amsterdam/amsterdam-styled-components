import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import MenuInline from './MenuInline'
import MenuInlineStyle from './MenuInlineStyle'
import MenuItem from '../MenuItem'

describe('MenuInline', () => {
  let component: ShallowWrapper<any, any>

  const children = [
    <MenuItem key={1} href="/">
      Space Bear 6
    </MenuItem>,
    <MenuItem key={2} href="/">
      Space Bear 6 Plus
    </MenuItem>,
    <MenuItem key={3} href="/">
      Space Bear 7
    </MenuItem>,
  ]

  beforeEach(() => {
    component = shallow<{}>(<MenuInline>{children}</MenuInline>)
  })

  it('should render', () => {
    expect(component.exists()).toBeTruthy()
  })

  it('should render the children', () => {
    expect(component.find(MenuInlineStyle).props().children).toBe(children)
    expect(
      component
        .find(MenuItem)
        .at(2)
        .exists(),
    ).toBeTruthy()
  })
})

import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import MenuInline from './MenuInline'
import MenuInlineStyle from './MenuInlineStyle'
import MenuItem from '../MenuItem'
import MenuButton from '../MenuButton'

describe('MenuInline', () => {
  let component: ShallowWrapper<any, any>

  const children = [
    <MenuItem key={1}>
      <MenuButton>Space Bear 6</MenuButton>
    </MenuItem>,
    <MenuItem key={2}>
      <MenuButton>Space Bear 6 Plus</MenuButton>
    </MenuItem>,
    <MenuItem key={3}>
      <MenuButton>Space Bear 7</MenuButton>
    </MenuItem>,
  ]

  beforeEach(() => {
    component = shallow<{}>(<MenuInline>{children}</MenuInline>)
  })

  it('should render', () => {
    expect(component.exists()).toBeTruthy()
  })

  it('should render the children', () => {
    expect(component.find(MenuInlineStyle).props()).toEqual({ children })
    expect(
      component
        .find(MenuItem)
        .at(2)
        .exists(),
    ).toBeTruthy()
  })
})

import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import MenuItemLabel from './MenuItemLabel'
import MenuItemLabelStyle from './MenuItemLabelStyle'

describe('MenuItemLabel', () => {
  let component: ShallowWrapper<any, any>

  const children = 'foo'

  beforeEach(() => {
    component = shallow<{}>(<MenuItemLabel>{children}</MenuItemLabel>)
  })

  it('should render', () => {
    expect(component.exists()).toBeTruthy()
  })

  it('should render the children', () => {
    expect(component.find(MenuItemLabelStyle).exists()).toBeTruthy()
    expect(component.find(MenuItemLabelStyle).props()).toEqual({ children })
  })
})

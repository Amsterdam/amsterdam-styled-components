import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import MenuItem from './MenuItem'
import MenuItemLink from '../MenuItemLink'

describe('MenuItem', () => {
  let component: ShallowWrapper<any, any>

  const children = 'foo'

  beforeEach(() => {
    component = shallow<{}>(<MenuItem>{children}</MenuItem>)
  })

  it('should render', () => {
    expect(component.exists()).toBeTruthy()
  })

  it('should render the children', () => {
    expect(component.find(MenuItemLink).exists()).toBeTruthy()
    expect(component.find(MenuItemLink).props().children).toBe(children)
  })
})

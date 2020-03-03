import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import MenuItemTitle from './MenuItemTitle'
import MenuItemTitleStyle from './MenuItemTitleStyle'

describe('MenuItemTitle', () => {
  let component: ShallowWrapper<any, any>

  const children = 'foo'

  beforeEach(() => {
    component = shallow<{}>(<MenuItemTitle>{children}</MenuItemTitle>)
  })

  it('should render', () => {
    expect(component.exists()).toBeTruthy()
    expect(component.props().forwardedAs).toBe('li')
  })

  it('should render the children', () => {
    expect(component.find(MenuItemTitleStyle).exists()).toBeTruthy()
    expect(component.find(MenuItemTitleStyle).props().children).toBe(children)
  })
})

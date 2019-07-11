import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import MenuList from './MenuList'
import MenuListStyle from './MenuListStyle'

describe('MenuList', () => {
  let component: ShallowWrapper<any, any>

  const children = 'foo'

  beforeEach(() => {
    component = shallow<{}>(<MenuList>{children}</MenuList>)
  })

  it('should render', () => {
    expect(component.exists()).toBeTruthy()
  })

  it('should render the children', () => {
    expect(component.find(MenuListStyle).exists()).toBeTruthy()
    expect(component.find(MenuListStyle).props().children).toBe(children)
  })
})

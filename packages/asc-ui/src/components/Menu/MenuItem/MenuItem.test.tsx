import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import MenuItem from './MenuItem'

describe('MenuItem', () => {
  let component: ShallowWrapper<any, any>

  const children = 'foo'

  beforeEach(() => {
    component = shallow<{}>(<MenuItem>{children}</MenuItem>)
  })

  it('should render', () => {
    expect(component.exists()).toBeTruthy()
  })
})

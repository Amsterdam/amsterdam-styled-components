import React from 'react'
import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme'
import MenuToggle from './MenuToggle'
import MenuList from '../MenuList'
import Toggle from '../../Toggle/Toggle'

describe('MenuToggle', () => {
  let component: ShallowWrapper<any, any>
  let container: ReactWrapper<any, any>

  const children = ['foo']

  const onClickSimulate = (element: any) =>
    element
      .find(Toggle)
      .at(0)
      .simulate('click', { preventDefault: () => {} })

  beforeEach(() => {
    component = shallow<{}>(<MenuToggle>{children}</MenuToggle>)
  })

  it('should render', () => {
    expect(component.exists()).toBeTruthy()
  })

  it('should render the children', () => {
    expect(component.find(MenuList).exists()).toBeTruthy()
    expect(component.find(MenuList).props()).toEqual({ children })
  })

  it('should toggle onClick', () => {
    expect(component.find(Toggle).props().open).toBe(false)

    onClickSimulate(component)

    expect(component.find(Toggle).props().open).toBe(true)
  })

  it('should call onExpand', () => {
    const onExpandMock = jest.fn()
    container = mount<{}>(
      <MenuToggle onExpand={onExpandMock}>{children}</MenuToggle>,
    )

    onClickSimulate(container)
    expect(onExpandMock).toHaveBeenCalled()
  })
})

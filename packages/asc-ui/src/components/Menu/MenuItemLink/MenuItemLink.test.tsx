import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { ChevronRight, ChevronLeft } from '@datapunt/asc-assets'

import MenuItemLabel from '../MenuItemLabel'
import MenuItemLink from './MenuItemLink'
import { useMenuContext } from '../MenuContext'
import useMenuFocus from '../useMenuFocus'

jest.mock('../MenuContext')
jest.mock('../useMenuFocus')

describe('MenuItemLink', () => {
  let component: ShallowWrapper<any, any>
  const useMenuContextMock = useMenuContext as jest.Mock
  const useMenuFocusMock = useMenuFocus as jest.Mock

  const children = 'foo'

  const mockContext = {
    activeChild: 0,
    setActiveChild: jest.fn(),
    setActiveToggleChild: jest.fn(),
    setOpenToggle: jest.fn(),
    underFlyOutMenu: false,
    hasToggle: false,
  }

  beforeEach(() => {
    useMenuContextMock.mockImplementationOnce(() => mockContext)
    useMenuFocusMock.mockImplementationOnce(() => {})

    component = shallow<{}>(<MenuItemLink>{children}</MenuItemLink>)
  })

  it('should render', () => {
    expect(component.exists()).toBeTruthy()
  })

  it('should render the children', () => {
    expect(component.find(MenuItemLabel).exists()).toBeTruthy()
    expect(component.find(MenuItemLabel).props()).toEqual({ children })
  })

  it('should render a leftIcon and rightIcon prop', () => {
    useMenuContextMock.mockImplementationOnce(() => mockContext)

    component = shallow<{}>(
      <MenuItemLink iconLeft={<ChevronLeft />} iconRight={<ChevronRight />}>
        {children}
      </MenuItemLink>,
    )

    expect(component.find(ChevronRight).exists()).toBeTruthy()
    expect(component.find(ChevronLeft).exists()).toBeTruthy()
  })

  it('should render a ChevronRight when rendered within MenuFlyOut', () => {
    useMenuContextMock.mockImplementationOnce(() => ({
      ...mockContext,
      underFlyOutMenu: true,
    }))

    component = shallow<{}>(<MenuItemLink>{children}</MenuItemLink>)

    expect(component.find(ChevronRight).exists()).toBeTruthy()
  })

  it('should render the leftIcon prop and not ChevronRight when rendered within MenuFlyOut', () => {
    useMenuContextMock.mockImplementationOnce(() => ({
      ...mockContext,
      underFlyOutMenu: true,
    }))

    component = shallow<{}>(
      <MenuItemLink iconLeft={<ChevronLeft />}>{children}</MenuItemLink>,
    )

    expect(component.find(ChevronRight).exists()).toBeFalsy()
    expect(component.find(ChevronLeft).exists()).toBeTruthy()
  })
})

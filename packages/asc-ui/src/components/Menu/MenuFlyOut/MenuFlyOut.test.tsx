import { ChevronDown, ChevronUp } from '@datapunt/asc-assets'
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme'
import 'jest-styled-components'
import React from 'react'
import { KeyboardKeys } from '../../../types'
import { useMenuContext } from '../MenuContext'
import MenuFlyOut from '.'
import MenuItem from '../MenuItem'
import MenuItemLink from '../MenuItemLink'
import MenuList from '../MenuList'
import useMenuFocus from '../useMenuFocus'

jest.useFakeTimers()

jest.mock('../MenuContext')
jest.mock('../useMenuFocus')

describe('MenuFlyOut', () => {
  let component: ShallowWrapper<any, any>
  let container: ReactWrapper<any, any>
  let menuListProps: any
  const useMenuContextMock = useMenuContext as jest.Mock
  const useMenuFocusMock = useMenuFocus as jest.Mock

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

  const mockContext = {
    activeChild: 0,
    setActiveChild: jest.fn(),
    setActiveToggleChild: jest.fn(),
    setOpenToggle: jest.fn(),
    underFlyOutMenu: false,
    hasToggle: false,
  }

  const onClickSimulate = (element: any = component) =>
    element
      .find(MenuItemLink)
      .at(0)
      .simulate('click', { preventDefault: () => {} })
  const onKeyDownSimulate = (keyType: any) =>
    component
      .find(MenuItemLink)
      .at(0)
      .simulate('keydown', {
        preventDefault: () => {},
        key: KeyboardKeys[keyType],
      })

  beforeEach(() => {
    useMenuContextMock.mockImplementation(() => mockContext)
    useMenuFocusMock.mockImplementation(() => {})

    component = shallow<{}>(<MenuFlyOut label="Fly Out">{children}</MenuFlyOut>)
  })

  it('should render', () => {
    expect(component.exists()).toBeTruthy()
  })

  it('should be closed by default', () => {
    menuListProps = component.find(MenuList).props()
    expect(menuListProps['aria-hidden']).toBe(true)
  })

  it('should toggle the open state on click', () => {
    onClickSimulate()

    menuListProps = component.find(MenuList).props()
    expect(menuListProps['aria-hidden']).toBe(false)
  })

  it('should not toggle the open state when already opened', () => {
    onClickSimulate()
    onClickSimulate()

    menuListProps = component.find(MenuList).props()
    expect(menuListProps['aria-hidden']).toBe(false)
  })

  it('should toggle the open state on enter', () => {
    onKeyDownSimulate('Enter')

    menuListProps = component.find(MenuList).props()
    expect(menuListProps['aria-hidden']).toBe(false)
  })

  it('should toggle the open state on space', () => {
    onKeyDownSimulate('Space')

    menuListProps = component.find(MenuList).props()
    expect(menuListProps['aria-hidden']).toBe(false)
  })

  it('should call onExpand', () => {
    const onExpandMock = jest.fn()
    useMenuContextMock.mockImplementationOnce(() => ({
      ...mockContext,
      onExpand: onExpandMock,
    }))

    container = mount<{}>(<MenuFlyOut label="Fly Out">{children}</MenuFlyOut>)

    onClickSimulate(container)

    expect(onExpandMock).toHaveBeenCalled()
  })

  describe('when used nested', () => {
    const setActiveToggleChildMock = jest.fn()

    beforeEach(() => {
      useMenuContextMock.mockImplementation(() => ({
        ...mockContext,
        setActiveToggleChild: setActiveToggleChildMock,
        hasToggle: true,
      }))
      useMenuFocusMock.mockImplementation(() => {})

      component = shallow<{}>(
        <MenuFlyOut label="Fly Out">{children}</MenuFlyOut>,
      )
    })
    it('should set the open state including the Chevron icons', () => {
      const menuItemLink = component.find(MenuItemLink).at(0)

      expect(menuItemLink.find(<ChevronDown />)).toBeTruthy()
      menuListProps = component.find(MenuList).props()
      expect(menuListProps['aria-hidden']).toBe(true)

      onClickSimulate()

      expect(menuItemLink.find(<ChevronUp />)).toBeTruthy()

      menuListProps = component.find(MenuList).props()
      expect(menuListProps['aria-hidden']).toBe(false)

      // And set the active toggle child
      expect(setActiveToggleChildMock).toHaveBeenCalled()
    })
  })
})

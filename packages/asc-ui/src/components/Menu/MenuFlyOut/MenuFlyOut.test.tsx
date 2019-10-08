import { ChevronDown, ChevronUp } from '@datapunt/asc-assets'
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
import { KeyboardKeys } from '../../../types'
import { useMenuContext } from '../MenuContext'
import MenuFlyOut from '.'
import MenuItem from '../MenuItem'
import MenuList from '../MenuList'
import MenuButton from '../MenuButton/MenuButton'

jest.useFakeTimers()

jest.mock('../MenuContext')

describe('MenuFlyOut', () => {
  let component: ShallowWrapper<any, any>
  let container: ReactWrapper<any, any>
  let menuListProps: any
  const useMenuContextMock = useMenuContext as jest.Mock

  const children = [
    <MenuItem key={1}>
      <MenuButton $as="a" href="/">
        Space Bear 6
      </MenuButton>
    </MenuItem>,
    <MenuItem key={2}>
      <MenuButton $as="a" href="/">
        Space Bear 6 Plus
      </MenuButton>
    </MenuItem>,
    <MenuItem key={3}>
      <MenuButton $as="a" href="/">
        Space Bear 7
      </MenuButton>
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
      .find(MenuButton)
      .at(0)
      .simulate('click', { preventDefault: () => {} })
  const onKeyDownSimulate = (keyType: any) =>
    component
      .find(MenuButton)
      .at(0)
      .simulate('keydown', {
        preventDefault: () => {},
        key: KeyboardKeys[keyType],
      })

  beforeEach(() => {
    useMenuContextMock.mockImplementation(() => mockContext)

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
    jest.runAllTimers()

    menuListProps = component.find(MenuList).props()
    expect(menuListProps['aria-hidden']).toBe(false)
  })

  it('should toggle the open state on space', () => {
    onKeyDownSimulate('Space')
    jest.runAllTimers()

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

      component = shallow<{}>(
        <MenuFlyOut label="Fly Out">{children}</MenuFlyOut>,
      )
    })
    it('should set the open state including the Chevron icons', () => {
      const menuItemLink = component.find(MenuButton).at(0)

      expect(menuItemLink.find(<ChevronDown />)).toBeTruthy()
      menuListProps = component.find(MenuList).props()
      expect(menuListProps['aria-hidden']).toBe(true)

      onClickSimulate()

      expect(menuItemLink.find(<ChevronUp />)).toBeTruthy()

      menuListProps = component.find(MenuList).props()
      expect(menuListProps['aria-hidden']).toBe(false)
    })
  })
})

/* eslint-disable @typescript-eslint/no-empty-function */
import { ChevronDown, ChevronUp } from '@amsterdam/asc-assets'
import { act } from '@testing-library/react'
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme'
import MenuFlyOut from '.'
import { KeyboardKeys } from '../../../types'
import MenuButton from '../MenuButton/MenuButton'
import { useMenuContext } from '../MenuContext'
import MenuItem from '../MenuItem'
import MenuList from '../MenuList'

jest.useFakeTimers()

jest.mock('../MenuContext')

describe('MenuFlyOut', () => {
  let component: ShallowWrapper<any, any>
  let container: ReactWrapper<any, any>
  let menuListProps: any
  const useMenuContextMock = useMenuContext as jest.Mock

  const children = [
    <MenuItem key={1}>
      <MenuButton forwardedAs="a" href="/">
        Space Bear 6
      </MenuButton>
    </MenuItem>,
    <MenuItem key={2}>
      <MenuButton forwardedAs="a" href="/">
        Space Bear 6 Plus
      </MenuButton>
    </MenuItem>,
    <MenuItem key={3}>
      <MenuButton forwardedAs="a" href="/">
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

  const onKeyDownButtonSimulate = (keyType: any) =>
    component
      .find(MenuButton)
      .at(0)
      .simulate('keydown', {
        preventDefault: () => {},
        key: KeyboardKeys[keyType],
      })

  beforeEach(() => {
    useMenuContextMock.mockImplementation(() => mockContext)
    component = shallow(<MenuFlyOut label="Fly Out">{children}</MenuFlyOut>)
  })

  it('should render', () => {
    expect(component.exists()).toBeTruthy()
  })

  it('should be closed by default', () => {
    menuListProps = component.find(MenuList).props()
    expect(menuListProps['aria-hidden']).toBe(true)
  })

  it('should toggle the isOpen state on click', () => {
    act(() => {
      onClickSimulate()
      jest.runAllTimers()
    })

    menuListProps = component.find(MenuList).props()
    expect(menuListProps['aria-hidden']).toBe(false)
  })

  it('should not toggle the isOpen state when already opened', () => {
    act(() => {
      onClickSimulate()
      onClickSimulate()
      jest.runAllTimers()
    })

    menuListProps = component.find(MenuList).props()
    expect(menuListProps['aria-hidden']).toBe(false)
  })

  it('should toggle the isOpen state on enter', () => {
    act(() => {
      onKeyDownButtonSimulate('Enter')
      jest.runAllTimers()
    })

    menuListProps = component.find(MenuList).props()
    expect(menuListProps['aria-hidden']).toBe(false)
  })

  it('should call onExpand', () => {
    const onExpandMock = jest.fn()
    useMenuContextMock.mockImplementationOnce(() => ({
      ...mockContext,
      onExpand: onExpandMock,
    }))

    container = mount(<MenuFlyOut label="Fly Out">{children}</MenuFlyOut>)
    act(() => {
      onClickSimulate(container)
    })

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

      component = shallow(<MenuFlyOut label="Fly Out">{children}</MenuFlyOut>)
    })
    it('should set the isOpen state including the Chevron icons', () => {
      const menuItemLink = component.find(MenuButton).at(0)

      expect(menuItemLink.find(<ChevronDown />)).toBeTruthy()
      menuListProps = component.find(MenuList).props()
      expect(menuListProps['aria-hidden']).toBe(true)

      act(() => {
        onClickSimulate()
        jest.runAllTimers()
      })

      expect(menuItemLink.find(<ChevronUp />)).toBeTruthy()

      menuListProps = component.find(MenuList).props()
      expect(menuListProps['aria-hidden']).toBe(false)
    })
  })
})

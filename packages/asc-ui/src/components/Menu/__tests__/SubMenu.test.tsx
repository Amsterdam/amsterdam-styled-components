import * as React from 'react'
import { mount } from 'enzyme'
import SubMenu from '../SubMenu'
import MenuItem from '../MenuItem'
import { MenuContext } from '../Menu'
import MenuStyle from '../index'

describe('SubMenu', () => {
  const label = 'This is a button'
  const mockSetExpandedChild = jest.fn()
  const mockResetExpandedChild = jest.fn()
  const mockOnKeyDown = jest.fn()

  describe('In closed state', () => {
    const mockContext = {
      expandedChild: false,
      expandedChildIndex: -1,
      mobile: true,
      setExpandedChild: mockSetExpandedChild,
      resetExpandedChild: mockResetExpandedChild,
      onKeyDown: mockOnKeyDown,
    }

    const component = mount(
      <MenuContext.Provider value={mockContext}>
        <SubMenu label={label} open>
          <MenuItem />
          <MenuItem />
        </SubMenu>
      </MenuContext.Provider>,
    )

    const menuButton = component.find(MenuStyle.SubMenuButtonLabelStyle).at(0)

    it('should render the button with a label and an icon', () => {
      expect(menuButton.props().children).toEqual(label)
    })

    it('should handle the onClick function', () => {
      menuButton.simulate('click', {
        preventDefault: () => {},
      })

      expect(mockSetExpandedChild).toHaveBeenCalled()
    })

    it('should handle the onKeyDown event', () => {
      menuButton.simulate('keydown', { key: 'Enter' })

      expect(mockSetExpandedChild).toHaveBeenCalled()

      menuButton.simulate('keydown', { key: 'ArrowDown' })

      expect(mockOnKeyDown).toHaveBeenCalled()
    })

    it('should handle the onMouseOver event', () => {
      menuButton.simulate('mouseover')

      expect(mockSetExpandedChild).toHaveBeenCalled()
    })

    it('should handle the onMouseLeave event', () => {
      component.simulate('mouseleave')

      expect(mockSetExpandedChild).toHaveBeenCalled()
    })
  })

  describe('In open state', () => {
    const mockContext = {
      expandedChild: true,
      expandedChildIndex: 1,
      mobile: true,
      setExpandedChild: mockSetExpandedChild,
      resetExpandedChild: mockResetExpandedChild,
      onKeyDown: mockOnKeyDown,
    }

    const component = mount(
      <MenuContext.Provider value={mockContext}>
        <SubMenu index={3} label={label} open>
          <MenuItem />
          <MenuItem />
        </SubMenu>
      </MenuContext.Provider>,
    )

    const menuButton = component.find(MenuStyle.SubMenuButtonLabelStyle).at(0)

    it('should clone the children with the correct index', () => {
      expect(
        component
          .find(MenuItem)
          .at(0)
          .props().index,
      ).toBe(4)
    })
    it('should handle the onClick function', () => {
      menuButton.simulate('click', {
        preventDefault: () => {},
      })

      expect(mockResetExpandedChild).toHaveBeenCalled()
      expect(mockSetExpandedChild).toHaveBeenCalled()
    })

    it('should handle the onKeyDown event', () => {
      menuButton.simulate('keydown', { key: 'Enter' })

      expect(mockSetExpandedChild).toHaveBeenCalled()
      expect(mockResetExpandedChild).toHaveBeenCalled()

      menuButton.simulate('keydown', { key: 'ArrowDown' })

      expect(mockOnKeyDown).toHaveBeenCalled()
    })
  })
})

import * as React from 'react'
import { shallow } from 'enzyme'
import MenuItem from '../MenuItem'
import MenuStyle from '../index'
import { Icon } from '../../..'
import * as Menu from '../Menu'

describe('MenuItem', () => {
  const children = 'Click me'
  const mockIcon = { mockIcon: 'mockIcon' }
  const mockOnClick = jest.fn()
  const mockOnClickAction = jest.fn()

  const contextValues = { onClick: mockOnClickAction }
  jest
    // @ts-ignore
    .spyOn(Menu, 'useMenuContext')
    .mockImplementation(() => contextValues)

  const component = shallow(
    <MenuItem icon={mockIcon} onClick={mockOnClick}>
      {children}
    </MenuItem>,
  )

  it('should render the item with a label', () => {
    expect(
      component.find(MenuStyle.MenuItemLabelStyle).props().children,
    ).toEqual(children)
  })

  it('should render the button with an icon', () => {
    expect(component.find(Icon).props().children).toEqual(mockIcon)
  })

  it('should handle the onClick and onKeyDown event', () => {
    const componentHref = component.find(MenuStyle.MenuItemStyle)
    componentHref.simulate('click', {
      preventDefault: () => {},
    })

    expect(mockOnClick).toHaveBeenCalled()
    expect(mockOnClickAction).toHaveBeenCalled()

    component.simulate('keydown', { key: 'Enter', preventDefault: () => {} })

    expect(mockOnClick).toHaveBeenCalledTimes(2)
  })
})

import * as React from 'react'
import { mount } from 'enzyme'
import Menu from './Menu'
import MenuItem from './MenuItem'
import { MenuContext } from './Menu'
import MenuDropDown from './MenuDropDown'

describe('Menu', () => {
  const mockOnClick = jest.fn()
  const mockOnKeyDown = jest.fn()

  const mockContext = {
    open: false,
    onKeyDown: mockOnKeyDown,
    onClick: mockOnClick,
  }

  const children = (
    <>
      <MenuItem />
      <MenuItem />
    </>
  )

  it('should return the correct children', () => {
    const component = mount(
      <MenuContext.Provider value={mockContext}>
        <Menu>{children}</Menu>
      </MenuContext.Provider>,
    )

    expect(component.props().children).toEqual(children)
  })

  it('should render the component for the mobile menu', () => {
    const component = mount(
      <MenuContext.Provider value={mockContext}>
        <Menu mobile={true}>{children}</Menu>
      </MenuContext.Provider>,
    )

    expect(component.find(MenuDropDown).exists()).toBe(true)
  })
})

import * as React from 'react'
import { mount } from 'enzyme'
import { ReactComponent as ChevronDown } from '@datapunt/asc-assets/lib/Icons/ChevronDown.svg'
import MenuDropDown from './MenuDropDown'
import MenuItem from './MenuItem'
// import MenuList from './MenuList'
import { MenuContext } from './Menu'
// import MenuStyle from '../../styles/components/MenuStyle'
// import { Icon } from '../..'

describe('MenuDropDown', () => {
  const label = 'This is a button'
  const mockIcon = <ChevronDown />
  const mockOnClick = jest.fn()
  const mockOnClose = jest.fn()
  const mockOnKeyDown = jest.fn()

  describe('In closed state', () => {
    const mockContext = {
      open: false,
      onKeyDown: mockOnKeyDown,
      onClose: mockOnClose,
      onClick: mockOnClick,
    }

    const component = mount(
      <MenuContext.Provider value={mockContext}>
        <MenuDropDown label={label} icon={mockIcon}>
          <MenuItem />
          <MenuItem />
        </MenuDropDown>
      </MenuContext.Provider>,
    )

    it('should handle the onKeyDown event', () => {
      component.simulate('keydown', { key: 'Enter' })

      expect(mockOnClick).toHaveBeenCalled()

      component.simulate('keydown', { key: 'ArrowDown' })

      expect(mockOnKeyDown).toHaveBeenCalled()
    })
  })
})

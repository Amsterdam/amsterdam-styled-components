import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import MenuFlyOut from '.'
import MenuItem from '../MenuItem'
import MenuItemLink from '../MenuItemLink'
import MenuList from '../MenuList'
import { KeyboardKeys } from '../../../types'
import 'jest-styled-components'

jest.useFakeTimers()

describe('MenuFlyOut', () => {
  let component: ShallowWrapper<any, any>
  let menuListProps: any

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

  beforeEach(() => {
    component = shallow<{}>(<MenuFlyOut label="Fly Out">{children}</MenuFlyOut>)
  })

  it('should render', () => {
    expect(component.exists()).toBeTruthy()
  })

  describe('should toggle', () => {
    const onClickSimulate = () =>
      component
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
  })
})

import React from 'react'
import { ContextMenuItem } from '@datapunt/asc-ui/'
import { shallow, ShallowWrapper } from 'enzyme'
import ContextMenu from '../ContextMenu'
import { KeyboardKeys } from '../../../types'

jest.useFakeTimers()

describe('ContextMenu', () => {
  let component: ShallowWrapper<any, any>
  let instance: any
  let label: ShallowWrapper
  let wrapper: ShallowWrapper

  beforeEach(() => {
    component = shallow<ContextMenu>(
      <ContextMenu label="Click on me">
        <ContextMenuItem>One</ContextMenuItem>
        <ContextMenuItem>Two</ContextMenuItem>
        <ContextMenuItem>Three</ContextMenuItem>
      </ContextMenu>,
    )
    instance = component.instance()
    label = component.find('ContextMenuButton')
    wrapper = component.at(0)
  })

  it('should render', () => {
    expect(component).toMatchSnapshot()
  })

  describe('click and blur', () => {
    it('should toggle the open state', () => {
      label.simulate('click')
      expect(instance.state.open).toBe(true)

      label.simulate('click')
      expect(instance.state.open).toBe(false)
    })

    it('should set the open state to false and reset the selectedChild', () => {
      component.setState({
        open: true,
      })
      jest.spyOn(instance, 'getReference').mockImplementation(() => ({
        contains: () => false,
      }))

      wrapper.simulate('blur')
      jest.runAllTimers()

      expect(instance.state.open).toBe(false)
      expect(instance.state.selectedChild).toBe(-1)
    })
  })

  describe('keyboard event', () => {
    const preventDefaultMock = {
      preventDefault: () => {},
    }
    const arrowDown = {
      ...preventDefaultMock,
      key: KeyboardKeys.ArrowDown,
    }

    const arrowUp = {
      ...preventDefaultMock,
      key: KeyboardKeys.ArrowUp,
    }
    it('should ignore any actions when state is !open', () => {
      component.setState({ open: false })
      wrapper.simulate('keydown', arrowDown)
      expect(instance.state.selectedChild).toBe(-1)
    })
    it('should increment selectedChild state when pressing ArrowDown key', () => {
      component.setState({
        open: true,
        selectedChild: 0,
      })
      wrapper.simulate('keydown', arrowDown)
      expect(instance.state.selectedChild).toBe(1)
    })

    it('should decrement selectedChild state when pressing ArrowUp key', () => {
      component.setState({
        open: true,
        selectedChild: 2,
      })
      wrapper.simulate('keydown', arrowUp)
      expect(instance.state.selectedChild).toBe(1)
    })

    it('should jump to the first menu item when pressing ArrowDown on the last item', () => {
      component.setState({
        open: true,
        selectedChild: 2,
      })
      wrapper.simulate('keydown', arrowDown)
      expect(instance.state.selectedChild).toBe(0)
    })

    it('should jump to the last menu item when pressing ArrowUp on the first or unset (-1) item', () => {
      component.setState({
        open: true,
      })
      wrapper.simulate('keydown', arrowUp)
      expect(instance.state.selectedChild).toBe(2)

      component.setState({
        selectedChild: 0,
      })
      wrapper.simulate('keydown', arrowUp)
      expect(instance.state.selectedChild).toBe(2)
    })
  })
})

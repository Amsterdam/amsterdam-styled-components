import React from 'react'
import { mount } from 'enzyme'
import Toggle from './Toggle'
import { KeyboardKeys } from '../../types'
import ToggleButton from '../Button/ToggleButton/ToggleButton'

describe('Toggle', () => {
  let component: any
  const onClickMock = jest.fn()
  beforeEach(() => {
    component = mount(
      <Toggle onClick={onClickMock} render={false}>
        <div id="child">Foo</div>
      </Toggle>,
    )
  })

  it('should render the toggle button', () => {
    expect(component.find(ToggleButton).exists()).toBe(true)
  })

  it('should display the children when the button is clicked', () => {
    expect(component.find('#child').exists()).toBe(false)
    component.find(ToggleButton).at(0).simulate('click')
    expect(component.find('#child').exists()).toBe(true)
    expect(onClickMock).toHaveBeenCalled()
  })

  it('should not render the children when user presses the escape key after opening it', () => {
    const escape = {
      preventDefault: () => {},
      key: KeyboardKeys.Escape,
    }

    component.find(ToggleButton).at(0).simulate('click')
    expect(component.find('#child').exists()).toBe(true)
    component.simulate('keydown', escape)

    expect(component.find('#child').exists()).toBe(false)
  })

  it('should call the passed parent function when the button is clicked', () => {
    const onOpenMock = jest.fn()
    component = mount(
      <Toggle onClick={jest.fn()} onOpen={onOpenMock} render={false}>
        <div id="child">Foo</div>
      </Toggle>,
    )

    component.find(ToggleButton).at(0).simulate('click')
    expect(onOpenMock).toHaveBeenCalledWith(true)
  })

  it('should display the children when the parent passes an isOpen prop', () => {
    component = mount(
      <Toggle onClick={jest.fn()} open render={false}>
        <div id="child">Foo</div>
      </Toggle>,
    )

    expect(component.find('#child').exists()).toBe(true)
  })
})

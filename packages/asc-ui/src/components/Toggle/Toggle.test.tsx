import * as React from 'react'
import { mount, render } from 'enzyme'
import Toggle from './Toggle'
import 'jest-styled-components'
import { KeyboardKeys } from '../../types'
import ToggleButton from '../Button/ToggleButton/ToggleButton'

describe('Toggle', () => {
  it('should render', () => {
    const component = render(
      <Toggle>
        <div id="child">Foo</div>
      </Toggle>,
    )

    expect(component).toMatchSnapshot()
  })

  it('should display the children when the button is clicked', () => {
    const onClickMock = jest.fn()
    const component = mount(
      <Toggle onClick={onClickMock} render={false}>
        <div id="child">Foo</div>
      </Toggle>,
    )

    expect(component.find('#child').exists()).toBe(false)
    component
      .find(ToggleButton)
      .at(0)
      .simulate('click')
    expect(component.find('#child').exists()).toBe(true)
    expect(onClickMock).toHaveBeenCalled()
  })

  it('should not render the children when user presses the escape key after opening it', () => {
    const onClickMock = jest.fn()
    const escape = {
      preventDefault: () => {},
      key: KeyboardKeys.Escape,
    }
    const component = mount(
      <Toggle onClick={onClickMock} render={false}>
        <div id="child">Foo</div>
      </Toggle>,
    )

    component
      .find(ToggleButton)
      .at(0)
      .simulate('click')
    expect(component.find('#child').exists()).toBe(true)
    component.simulate('keydown', escape)

    expect(component.find('#child').exists()).toBe(false)
  })
})

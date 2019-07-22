import * as React from 'react'
import { shallow } from 'enzyme'
import Toggle from './Toggle'
import 'jest-styled-components'
import { ButtonToggleStyle } from '../ButtonToggle'
import { KeyboardKeys } from '../../types'

describe('Toggle', () => {
  it('should render', () => {
    const component = shallow(
      <Toggle>
        <div id="child">Foo</div>
      </Toggle>,
    )

    expect(component).toMatchSnapshot()
  })

  it('should display the children when the button is clicked', () => {
    const onClickMock = jest.fn()
    const component = shallow(
      <Toggle onClick={onClickMock} render={false}>
        <div id="child">Foo</div>
      </Toggle>,
    )

    expect(component.find('#child').exists()).toBe(false)
    component
      .find(ButtonToggleStyle)
      .at(0)
      .simulate('click')
    expect(component.find('#child').exists()).toBe(true)
    expect(onClickMock).toHaveBeenCalled()
  })

  it('should not render the children when user presses the escape key after opening it', () => {
    const escape = {
      preventDefault: () => {},
      key: KeyboardKeys.Escape,
    }
    const component = shallow(
      <Toggle render={false}>
        <div id="child">Foo</div>
      </Toggle>,
    )

    component
      .find(ButtonToggleStyle)
      .at(0)
      .simulate('click')
    expect(component.find('#child').exists()).toBe(true)
    component.simulate('keydown', escape)

    expect(component.find('#child').exists()).toBe(false)
  })
})

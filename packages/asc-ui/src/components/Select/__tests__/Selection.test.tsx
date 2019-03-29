import React from 'react'
import { Option } from '@datapunt/asc-ui/'
import { shallow } from 'enzyme'
import Select from '../Select'

describe('Selection', () => {
  const component = shallow<Select>(
    <Select small id="foo" label="Click on me">
      <Option.default id="listbox1-1" className="selected" aria-selected="true">
        Green
      </Option.default>
      <Option.default id="listbox1-2">Orange</Option.default>
    </Select>,
  )

  it('should render', () => {
    expect(component).toMatchSnapshot()
  })

  describe('state', () => {
    const instance = component.instance()
    const label = component.find('#foo').at(0)

    it('should toggle the open state', () => {
      label.simulate('click')
      expect(instance.state.open).toBe(true)

      label.simulate('click')
      expect(instance.state.open).toBe(false)
    })

    it('should set the open state to false', () => {
      instance.state.open = true

      label.simulate('blur')
      expect(instance.state.open).toBe(false)
    })
  })
})

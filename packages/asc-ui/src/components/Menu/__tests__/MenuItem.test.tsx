import React from 'react'
import { shallow } from 'enzyme'
import MenuItem from '../MenuItem'
import { KeyboardKeys } from '../../../types'

jest.useFakeTimers()

describe('MenuItem', () => {
  it('should trigger call onClick prop when pressing the enter key', () => {
    const mockFn = jest.fn()
    const component = shallow<MenuItem>(
      <MenuItem onClick={mockFn}>Foo</MenuItem>,
    )

    component.at(0).simulate('keydown', {
      preventDefault: () => {},
      key: KeyboardKeys.Enter,
    })

    expect(mockFn).toHaveBeenCalled()
  })
})

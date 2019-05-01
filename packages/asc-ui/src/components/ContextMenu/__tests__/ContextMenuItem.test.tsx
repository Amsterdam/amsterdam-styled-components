import React from 'react'
import { shallow } from 'enzyme'
import ContextMenuItem from '../ContextMenuItem'
import { KeyboardKeys } from '../../../types'

jest.useFakeTimers()

describe('ContextMenuItem', () => {
  it('should trigger call onClick prop when pressing the enter key', () => {
    const mockFn = jest.fn()
    const component = shallow<ContextMenuItem>(
      <ContextMenuItem onClick={mockFn}>Foo</ContextMenuItem>,
    )

    component.at(0).simulate('keydown', {
      preventDefault: () => {},
      key: KeyboardKeys.Enter,
    })

    expect(mockFn).toHaveBeenCalled()
  })
})

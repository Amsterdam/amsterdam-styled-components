import * as React from 'react'
import { shallow } from 'enzyme'
import MenuList from './MenuList'

describe('MenuLust', () => {
  it('should handle the onBlur event', () => {
    const mockOnBlur = jest.fn()

    const component = shallow(
      <MenuList open={true} id='id' onClose={mockOnBlur} />,
    )

    component.simulate('blur')

    expect(mockOnBlur).toHaveBeenCalled()

  })
})

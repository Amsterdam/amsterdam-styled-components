import * as React from 'react'
import { shallow } from 'enzyme'
import ShareButton from '../ShareButton'
import { Icon } from '../..'

describe('ShareButton', () => {
  const mockOnClick = jest.fn()
  const component = shallow(
    <ShareButton onClick={mockOnClick}>Click me</ShareButton>,
  )

  it('should render with the correct children', () => {
    expect(component.find(Icon).props().children).toBe('Click me')
  })

  it('should handle the onclick event', () => {
    component.at(0).simulate('click')

    expect(mockOnClick).toHaveBeenCalled()
  })
})

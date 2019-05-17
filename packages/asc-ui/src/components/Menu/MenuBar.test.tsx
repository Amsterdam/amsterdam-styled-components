import * as React from 'react'
import { shallow } from 'enzyme'
import MenuBar from './MenuBar'
import MenuItem from './MenuItem'

describe('MenuBar', () => {
  const mockOnClick = jest.fn()
  const children = (
    <>
      <MenuItem onClick={mockOnClick} />
      <MenuItem onClick={mockOnClick} />
    </>
  )
  const component = shallow(<MenuBar>{children}</MenuBar>)

  it('should render with the correct children', () => {
    expect(component.props().children).toBe(children)
  })
})

import * as React from 'react'
import { shallow } from 'enzyme'
import ShareBar from './ShareBar'
import ShareButton from '../ShareButton'

describe('ShareBar', () => {
  const mockOnClick = jest.fn()
  const children = (
    <>
      <ShareButton onClick={mockOnClick}>One</ShareButton>
      <ShareButton onClick={mockOnClick}>Two</ShareButton>
    </>
  )
  const component = shallow(<ShareBar>{children}</ShareBar>)
  const shareButton = component.find(ShareButton)

  it('should render with the correct children', () => {
    expect(component.props().children).toBe(children)
  })

  it('should render the children with the correct child', () => {
    expect(shareButton.at(0).props().children).toBe('One')
    expect(shareButton.at(1).props().children).toBe('Two')
  })

  it('should handle the onclick event', () => {
    shareButton.at(0).simulate('click')

    expect(mockOnClick).toHaveBeenCalled()
  })
})

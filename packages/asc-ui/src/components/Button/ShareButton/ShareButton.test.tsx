import { render, fireEvent } from '@testing-library/react'
import ShareButton from './index'

describe('ShareButton', () => {
  const mockOnClick = jest.fn()

  it('should render with the correct children', () => {
    const { getByText } = render(
      <ShareButton onClick={mockOnClick}>Click me</ShareButton>,
    )

    expect(getByText('Click me')).toBeTruthy()
  })

  it('should handle the onclick event', () => {
    const { container } = render(
      <ShareButton onClick={mockOnClick}>Click me</ShareButton>,
    )
    fireEvent.click(container.firstChild as Element)
    expect(mockOnClick).toHaveBeenCalled()
  })
})

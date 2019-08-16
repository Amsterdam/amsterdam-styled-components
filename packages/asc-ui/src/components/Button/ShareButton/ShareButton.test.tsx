import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ShareButton from './index'

describe('ShareButton', () => {
  const mockOnClick = jest.fn()
  let getByText: Function
  let container: HTMLElement

  beforeEach(() => {
    ;({ getByText, container } = render(
      <ShareButton onClick={mockOnClick}>Click me</ShareButton>,
    ))
  })

  it('should render with the correct children', () => {
    expect(getByText('Click me')).toBeTruthy()
  })

  it('should handle the onclick event', () => {
    fireEvent.click(container.firstChild as Element)
    expect(mockOnClick).toHaveBeenCalled()
  })
})

import { render, fireEvent } from '@testing-library/react'
import SearchBar from './SearchBar'

jest.mock('polished')

describe('SearchBar', () => {
  let container: any

  const mockOnSubmit = jest.fn()

  beforeEach(() => {
    ;({ container } = render(
      <SearchBar onSubmit={mockOnSubmit}>searchbar-content</SearchBar>,
    ))
  })

  it('should render the label and icon', () => {
    const icon = container.querySelector('button span')

    expect(icon).toBeDefined()
    expect(container.firstChild).toHaveTextContent('searchbar-content')
  })

  it('should handle the onClick event', () => {
    const button = container.querySelector('button')

    fireEvent.click(button)

    expect(mockOnSubmit).toHaveBeenCalled()
  })
})

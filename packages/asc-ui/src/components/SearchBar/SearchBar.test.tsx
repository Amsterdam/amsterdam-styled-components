import { render, fireEvent } from '@testing-library/react'
import SearchBar from './SearchBar'

jest.mock('polished')

describe('SearchBar', () => {
  let container: any

  const mockOnSubmit = jest.fn()

  beforeEach(() => {
    ;({ container } = render(
      <form onSubmit={mockOnSubmit}>
        <SearchBar>searchbar-content</SearchBar>
      </form>,
    ))
  })

  it('should render the label and icon', () => {
    const icon = container.querySelector('button span')

    expect(icon).toBeDefined()
    expect(container.firstChild).toHaveTextContent('searchbar-content')
  })

  it('should handle the onClick event', () => {
    const form = container.querySelector('form')

    fireEvent.submit(form)

    expect(mockOnSubmit).toHaveBeenCalled()
  })
})

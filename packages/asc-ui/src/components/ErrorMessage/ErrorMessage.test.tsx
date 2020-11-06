import { render } from '@testing-library/react'
import { ThemeProvider } from '../../theme'
import ErrorMessage from './ErrorMessage'

describe('ErrorMessage', () => {
  it('should render', () => {
    const { container } = render(
      <ThemeProvider>
        <ErrorMessage message="This is an incorrect value" />
      </ThemeProvider>,
    )

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild?.textContent).toEqual(
      'This is an incorrect value',
    )
  })
})

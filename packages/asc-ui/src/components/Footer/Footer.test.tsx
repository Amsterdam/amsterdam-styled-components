import { render, cleanup } from '@testing-library/react'
import Footer from './Footer'
import { ThemeProvider } from '../../theme'

describe('Footer', () => {
  beforeEach(cleanup)
  it('should render and apply the style', () => {
    const { queryByText } = render(
      <ThemeProvider>
        <Footer data-testid="test-id">Footer content</Footer>
      </ThemeProvider>,
    )
    expect(queryByText(/Footer content/)).not.toBeNull()
  })
})

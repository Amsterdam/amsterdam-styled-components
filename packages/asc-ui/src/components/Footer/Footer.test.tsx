import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ascDefaultTheme, ThemeProvider } from '@datapunt/asc-core'
import Footer from './Footer'
import 'jest-styled-components'

const theme = {
  ...ascDefaultTheme,
}

describe('Footer', () => {
  beforeEach(cleanup)
  it('should render and apply the style', () => {
    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <Footer data-testid="test-id">Footer content</Footer>
      </ThemeProvider>,
    )
    expect(queryByText(/Footer content/)).not.toBeNull()
  })
})

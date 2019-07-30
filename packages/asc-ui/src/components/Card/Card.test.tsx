import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ascDefaultTheme, ThemeProvider } from '@datapunt/asc-core'
import Card from './Card'
import 'jest-styled-components'

const theme = {
  ...ascDefaultTheme,
}

describe('Card', () => {
  beforeEach(cleanup)
  it('should render and apply style', () => {
    const { container, queryByText } = render(
      <ThemeProvider theme={theme}>
        <Card>Card content</Card>
      </ThemeProvider>,
    )
    expect(queryByText(/Card content/)).not.toBeNull()
    expect(container.firstChild).toHaveStyleRule('display', 'flex')
  })
})

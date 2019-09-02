import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ascDefaultTheme, ThemeProvider } from '@datapunt/asc-core'
import Card from './Card'
import { themeColor } from '../../utils'

const theme = {
  ...ascDefaultTheme,
}

describe('Card', () => {
  beforeEach(cleanup)
  it('should render and apply default style', () => {
    const { container, queryByText } = render(
      <ThemeProvider theme={theme}>
        <Card>Card content</Card>
      </ThemeProvider>,
    )
    expect(queryByText(/Card content/)).not.toBeNull()
    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      themeColor('tint', 'level1')({ theme }),
    )
  })
})

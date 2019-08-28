import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ascDefaultTheme, ThemeProvider } from '@datapunt/asc-core'
import CardMedia from './CardMedia'
import { themeColor } from '../../utils'

const theme = {
  ...ascDefaultTheme,
}

describe('CardMedia', () => {
  beforeEach(cleanup)
  it('should render and apply default style', () => {
    const { container, queryByText } = render(
      <ThemeProvider theme={theme}>
        <CardMedia>CardMedia content</CardMedia>
      </ThemeProvider>,
    )
    expect(queryByText(/CardMedia content/)).not.toBeNull()
    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      themeColor('tint', 'level1')({ theme }),
    )
  })
})

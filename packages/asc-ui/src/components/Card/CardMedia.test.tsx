import { render, cleanup } from '@testing-library/react'
import CardMedia from './CardMedia'
import { themeColor } from '../../utils'
import { ThemeProvider, ascDefaultTheme } from '../../theme'

describe('CardMedia', () => {
  beforeEach(cleanup)
  it('should render and apply default style', () => {
    const { container, queryByText } = render(
      <ThemeProvider>
        <CardMedia>CardMedia content</CardMedia>
      </ThemeProvider>,
    )
    expect(queryByText(/CardMedia content/)).not.toBeNull()
    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      themeColor('tint', 'level1')({ theme: ascDefaultTheme }),
    )
  })
})

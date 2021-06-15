import { render, cleanup } from '@testing-library/react'
import Card from './Card'
import { themeColor } from '../../utils'
import { ThemeProvider, ascDefaultTheme } from '../../theme'

describe('Card', () => {
  beforeEach(cleanup)
  it('should render and apply default style', () => {
    const { container, queryByText } = render(
      <ThemeProvider>
        <Card>Card content</Card>
      </ThemeProvider>,
    )
    expect(queryByText(/Card content/)).not.toBeNull()
    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      themeColor('tint', 'level1')({ theme: ascDefaultTheme }),
    )
  })
})

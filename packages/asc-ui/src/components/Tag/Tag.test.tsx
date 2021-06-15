import { cleanup, render } from '@testing-library/react'
import { themeColor } from '../../utils'
import Tag from './Tag'
import { ThemeProvider, ascDefaultTheme } from '../../theme'

describe('Tag', () => {
  beforeEach(cleanup)
  it('should render and apply default style', () => {
    const { container, queryByText } = render(
      <ThemeProvider>
        <Tag>Tag one</Tag>
      </ThemeProvider>,
    )

    expect(queryByText(/Tag one/)).not.toBeNull()
    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      themeColor('primary', 'main')({ theme: ascDefaultTheme }),
    )
    // color should be readable
    expect(container.firstChild).toHaveStyleRule('color', '#fff')
  })
  it('should render and apply custom style', () => {
    const { container, queryByText } = render(
      <ThemeProvider>
        <Tag colorType="primary">Tag two</Tag>
      </ThemeProvider>,
    )

    expect(queryByText(/Tag two/)).not.toBeNull()
    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      themeColor('primary')({ theme: ascDefaultTheme }),
    )
    // color should be readable
    expect(container.firstChild).toHaveStyleRule('color', '#fff')
  })
})

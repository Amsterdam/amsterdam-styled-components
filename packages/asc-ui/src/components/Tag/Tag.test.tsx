import { ascDefaultTheme, ThemeProvider } from '@datapunt/asc-core'
import { cleanup, render } from '@testing-library/react'
import * as React from 'react'
import { color } from '../../utils'
import Tag from './Tag'

const theme = {
  ...ascDefaultTheme,
}

describe('Tag', () => {
  beforeEach(cleanup)
  it('should render and apply default style', () => {
    const { container, queryByText } = render(
      <ThemeProvider theme={theme}>
        <Tag>Tag one</Tag>
      </ThemeProvider>,
    )

    expect(queryByText(/Tag one/)).not.toBeNull()
    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      color('tint', 'level2')({ theme }),
    )
    // color should be readable
    expect(container.firstChild).toHaveStyleRule('color', '#000')
  })
  it('should render and apply custom style', () => {
    const { container, queryByText } = render(
      <ThemeProvider theme={theme}>
        <Tag colorVariant="primary">Tag two</Tag>
      </ThemeProvider>,
    )

    expect(queryByText(/Tag two/)).not.toBeNull()
    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      color('primary')({ theme }),
    )
    // color should be readable
    expect(container.firstChild).toHaveStyleRule('color', '#fff')
  })
})

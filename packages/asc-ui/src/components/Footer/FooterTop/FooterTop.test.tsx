import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ascDefaultTheme, ThemeProvider } from '@datapunt/asc-core'
import FooterTop from './FooterTop'
import { color, breakpoint } from '../../../utils'

const theme = { ...ascDefaultTheme }

describe('FooterTop', () => {
  afterEach(cleanup)

  it('should render with the style', () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <FooterTop data-testid="test-id">Footer bottom</FooterTop>
      </ThemeProvider>,
    )

    expect(queryByTestId('test-id')).toHaveStyleRule(
      'background-color',
      color('tint', 'level5')({ theme }),
    )

    expect(queryByTestId('test-id')).not.toHaveStyleRule(
      'padding-bottom',
      '24px',
      {
        media: `screen and ${breakpoint('max-width', 'tabletM')({ theme })}`,
      },
    )

    expect(queryByTestId('test-id')).toHaveStyleRule('padding-bottom', '24px', {
      media: `screen and ${breakpoint('min-width', 'tabletM')({ theme })}`,
    })
  })
})

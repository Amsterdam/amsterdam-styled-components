import React from 'react'
import { render, cleanup } from '@testing-library/react'
import FooterTop from './FooterTop'
import { themeColor, breakpoint } from '../../../utils'
import { ascDefaultTheme } from '../../../index'
import ThemeProvider from '../../../theme/ThemeProvider'

describe('FooterTop', () => {
  afterEach(cleanup)

  it('should render with the style', () => {
    const { queryByTestId } = render(
      <ThemeProvider>
        <FooterTop data-testid="test-id">Footer bottom</FooterTop>
      </ThemeProvider>,
    )

    expect(queryByTestId('test-id')).toHaveStyleRule(
      'background-color',
      themeColor('tint', 'level5')({ theme: ascDefaultTheme }),
    )

    expect(queryByTestId('test-id')).not.toHaveStyleRule(
      'padding-bottom',
      '24px',
      {
        media: `screen and ${breakpoint(
          'max-width',
          'tabletM',
        )({ theme: ascDefaultTheme })}`,
      },
    )

    expect(queryByTestId('test-id')).toHaveStyleRule('padding-bottom', '24px', {
      media: `screen and ${breakpoint(
        'min-width',
        'tabletM',
      )({ theme: ascDefaultTheme })}`,
    })
  })
})

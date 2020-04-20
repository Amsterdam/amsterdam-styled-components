import React from 'react'
import { render, cleanup } from '@testing-library/react'
import FooterBottom from './FooterBottom'
import { themeColor } from '../../../utils'
import { ThemeProvider, ascDefaultTheme } from '../../../theme'

describe('FooterBottom', () => {
  afterEach(cleanup)

  it('should render with the style', () => {
    const { queryByTestId } = render(
      <ThemeProvider>
        <FooterBottom data-testid="test-id">Footer bottom</FooterBottom>
      </ThemeProvider>,
    )

    expect(queryByTestId('test-id')).toHaveStyleRule(
      'background-color',
      themeColor('tint', 'level1')({ theme: ascDefaultTheme }),
    )
  })
})

import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ascDefaultTheme, ThemeProvider } from '@datapunt/asc-core'
import FooterBottom from './FooterBottom'
import { color } from '../../../utils'
import 'jest-styled-components'

const theme = { ...ascDefaultTheme }

describe('FooterBottom', () => {
  afterEach(cleanup)

  it('should render with the style', () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <FooterBottom data-testid="test-id">Footer bottom</FooterBottom>
      </ThemeProvider>,
    )

    expect(queryByTestId('test-id')).toHaveStyleRule(
      'background-color',
      color('tint', 'level1')({ theme }),
    )
  })
})

import React from 'react'
import { ascDefaultTheme, ThemeProvider } from '@datapunt/asc-core'
import { render } from '@testing-library/react'
import GlobalStyle from './GlobalStyle'
import 'jest-styled-components'

const theme = {
  ...ascDefaultTheme,
  globalStyle: `p {margin-bottom:8px;}`,
}

describe('GlobalStyle', () => {
  it('should apply the the global style from theme', () => {
    const testStyle = new GlobalStyle({ theme })
    expect(testStyle.state.globalStyle).not.toBeNull()
    const { globalStyle } = testStyle.state
    const css = globalStyle.rules.reduce(
      (acc: string, rule: string) => acc + rule,
    )
    expect(
      css.indexOf(`return utils_1.fromTheme('globalStyle')`),
    ).toBeGreaterThan(-1)
  })

  it('should not render global style in the document', () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle data-testid="global-style-id" />
          <p data-testid="p-id" />
        </>
      </ThemeProvider>,
    )
    expect(queryByTestId('global-style-id')).toBeFalsy()
    expect(queryByTestId('p-id')).toBeTruthy()
  })
})

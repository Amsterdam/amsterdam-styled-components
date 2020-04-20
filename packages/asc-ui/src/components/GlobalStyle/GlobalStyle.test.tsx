import React from 'react'
import { render } from '@testing-library/react'
import GlobalStyle from './GlobalStyle'
import { ThemeProvider, ascDefaultTheme } from '../../theme'

const overrides = {
  globalStyle: `p {margin-bottom:8px;}`,
}

describe('GlobalStyle', () => {
  it('should apply the the global style from theme', () => {
    const testStyle = new GlobalStyle({ theme: ascDefaultTheme })
    expect(testStyle.state.globalStyle).not.toBeNull()
    const { globalStyle } = testStyle.state
    const css = globalStyle.rules.reduce(
      (acc: string, rule: string) => acc + rule,
    )
    expect(
      css.indexOf(`utils_1.getValueFromTheme('globalStyle')`),
    ).toBeGreaterThan(-1)
  })

  it('should not render global style in the document', () => {
    const { queryByTestId } = render(
      <ThemeProvider overrides={overrides}>
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

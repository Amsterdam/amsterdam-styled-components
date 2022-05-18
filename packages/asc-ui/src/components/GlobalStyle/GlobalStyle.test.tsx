import { render } from '@testing-library/react'
import GlobalStyle from './GlobalStyle'
import { ThemeProvider } from '../../theme'
import * as utils from '../../utils/themeUtils'

const overrides = {
  globalStyle: `p {margin-bottom:8px;}`,
}

describe('GlobalStyle', () => {
  it('should apply the global style from theme', () => {
    jest.spyOn(utils, 'getValueFromTheme')
    render(
      <ThemeProvider>
        <GlobalStyle />
      </ThemeProvider>,
    )
    expect(utils.getValueFromTheme).toHaveBeenCalled()
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

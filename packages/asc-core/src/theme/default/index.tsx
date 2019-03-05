import * as React from 'react'
import { Theme } from '../index'
import * as StyledComponents from '../../styled-components'
import colors from './colors'
import typography from './typography'
import globalStyle from './globalStyle'

interface Props {
  overrides?: Theme.ThemeInterface,
  children: any
}

const ASCDefaultThemeProvider = ({ overrides, children }: Props) => {
  const namespacedTheme = {
    ascTheme: Object.assign(
      {},
      Theme.CreateTheme.getTheme(colors, typography, globalStyle),
      overrides,
    ),
  }
  return (
    <StyledComponents.ThemeProvider theme={namespacedTheme.ascTheme}>
      {children}
    </StyledComponents.ThemeProvider>
  )
}

export default ASCDefaultThemeProvider

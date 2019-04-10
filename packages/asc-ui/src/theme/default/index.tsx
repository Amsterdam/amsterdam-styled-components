import * as React from 'react'
import deepMerge from 'deepmerge'
import {
  Theme,
  THEME_NAME,
  ascDefaultTheme,
  StyledComponents,
} from '../../index'

const { colors, typography, globalStyle } = ascDefaultTheme

interface Props {
  overrides?: Theme.DefaultThemeInterface
  children: any
}

const ASCDefaultThemeProvider = ({ overrides, children }: Props) => {
  const namespacedTheme: any = {
    [THEME_NAME]: deepMerge(
      Theme.CreateTheme.getTheme(colors, typography, globalStyle),
      overrides || {},
    ),
  }
  return (
    <StyledComponents.ThemeProvider theme={namespacedTheme}>
      {children}
    </StyledComponents.ThemeProvider>
  )
}

export default ASCDefaultThemeProvider

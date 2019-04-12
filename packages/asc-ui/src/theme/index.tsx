import * as React from 'react'
import deepMerge from 'deepmerge'
import { Theme, ascDefaultTheme, StyledComponents } from '..'

const { DEFAULT_THEME_NAME, colors, typography, globalStyle } = ascDefaultTheme

interface Props {
  overrides?: Theme.ThemeInterface
  theme?: string
  children: any
}

const ThemeProvider = ({
  theme = DEFAULT_THEME_NAME,
  overrides,
  children,
}: Props) => {
  const namespacedTheme: any = {
    [DEFAULT_THEME_NAME]: deepMerge(
      Theme.CreateTheme.getTheme(colors, typography, globalStyle),
      overrides || {},
    ),
  }
  return (
    <StyledComponents.ThemeProvider theme={namespacedTheme[theme]}>
      {children}
    </StyledComponents.ThemeProvider>
  )
}

export default ThemeProvider

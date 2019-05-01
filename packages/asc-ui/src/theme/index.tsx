import * as React from 'react'
import deepMerge from 'deepmerge'
import { Theme, ascDefaultTheme, StyledComponents } from '..'

const { DEFAULT_THEME_NAME } = ascDefaultTheme

interface Props {
  overrides?: Theme.ThemeInterface
  themeName?: string
  children: any
}

const ThemeProvider = ({
  themeName = DEFAULT_THEME_NAME,
  overrides,
  children,
}: Props) => {
  const theme: Theme.ThemeInterface = deepMerge(
    Theme.ThemeFactory.createTheme(themeName),
    overrides || {},
  )

  return (
    <StyledComponents.ThemeProvider theme={theme}>
      {children}
    </StyledComponents.ThemeProvider>
  )
}

export default ThemeProvider

import React, { ReactNode } from 'react'
import deepMerge from 'deepmerge'
import { Theme, ascDefaultTheme, ThemeProvider } from '@datapunt/asc-core'

const { DEFAULT_THEME_NAME } = ascDefaultTheme

interface Props {
  overrides?: Theme.ThemeInterface
  themeName?: string
  children: ReactNode
}

const DefaultThemeProvider: React.FC<Props> = ({
  themeName = DEFAULT_THEME_NAME,
  overrides,
  children,
}) => {
  const theme: Theme.ThemeInterface = deepMerge(
    Theme.ThemeFactory.createTheme(themeName),
    overrides || {},
  )

  return (
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  )
}

export default DefaultThemeProvider

import React, { ReactNode } from 'react'
import deepMerge from 'deepmerge'
import {
  Theme,
  ascDefaultTheme,
  ThemeProvider as AscThemeProvider,
} from '@datapunt/asc-core'

const { DEFAULT_THEME_NAME } = ascDefaultTheme

interface Props {
  overrides?: Partial<Theme.ThemeInterface>
  themeName?: string
  children: ReactNode
}

const ThemeProvider: React.FC<Props> = ({
  themeName = DEFAULT_THEME_NAME,
  overrides,
  children,
}) => {
  const theme: Theme.ThemeInterface = deepMerge(
    Theme.ThemeFactory.createTheme(themeName),
    overrides || {},
  )

  return (
    <AscThemeProvider theme={theme}>
      <>{children}</>
    </AscThemeProvider>
  )
}

export default ThemeProvider

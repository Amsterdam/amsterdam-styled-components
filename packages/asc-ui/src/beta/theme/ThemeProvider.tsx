import deepMerge from 'deepmerge'
import type { FunctionComponent, ReactNode } from 'react'
import { ThemeProvider as AscThemeProvider } from 'styled-components'
import { ascDefaultTheme } from '.'
import type { Theme } from '../types'

export interface ThemeProviderProps {
  overrides?: Partial<Theme.ThemeInterface>
  theme?: Theme.ThemeInterface
  deep?: boolean
  children: ReactNode
}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
  theme: defaultTheme = ascDefaultTheme,
  overrides,
  deep = true,
  children,
}) => {
  const theme: Theme.ThemeInterface = deep
    ? deepMerge(defaultTheme, overrides || {})
    : { ...defaultTheme, ...overrides }

  return <AscThemeProvider theme={theme}>{children}</AscThemeProvider>
}

export default ThemeProvider

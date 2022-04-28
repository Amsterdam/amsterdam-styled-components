import deepMerge from 'deepmerge'
import type { ReactNode } from 'react'
import { ThemeProvider as AscThemeProvider } from 'styled-components'
import { ascDefaultTheme } from '.'
import type { Theme } from '../types'

export interface ThemeProviderProps {
  overrides?: Partial<Theme.ThemeInterface>
  theme?: Theme.ThemeInterface
  deep?: boolean
  children: ReactNode
}

function ThemeProvider({
  theme: defaultTheme = ascDefaultTheme,
  overrides,
  deep = true,
  children,
}: ThemeProviderProps) {
  const theme: Theme.ThemeInterface = deep
    ? deepMerge(defaultTheme, overrides || {})
    : { ...defaultTheme, ...overrides }

  return <AscThemeProvider theme={theme}>{children}</AscThemeProvider>
}

export default ThemeProvider

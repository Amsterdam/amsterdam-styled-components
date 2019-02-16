import * as React from 'react'
import { Theme, ThemeProvider } from '@amsterdam/asc-core'
import defaultTheme from './config/theme'

interface Props {
  theme?: Theme.ThemeInterface,
  children: any
}

const ASCDefaultThemeProvider = ({ theme, children }: Props) => {
  const namespacedTheme = {
    ascTheme: Object.assign({}, defaultTheme.ascTheme, theme),
  }
  return (
    <ThemeProvider theme={namespacedTheme}>
      {children}
    </ThemeProvider>
  )
}

export default ASCDefaultThemeProvider

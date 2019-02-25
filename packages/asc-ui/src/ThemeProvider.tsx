import * as React from 'react'
import { StyledComponents, Theme } from '@datapunt/asc-core'
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
    <StyledComponents.ThemeProvider theme={namespacedTheme}>
      {children}
    </StyledComponents.ThemeProvider>
  )
}

export default ASCDefaultThemeProvider

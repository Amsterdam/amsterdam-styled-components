import React from 'react'
import { ThemeProvider, Theme } from '..'

// These are the overrides for showing compact text for several typography types
const overridesCompactTheme: Partial<Theme.ThemeInterface> = {
  typography: {
    h4: {
      lineHeight: '23px',
    },
    p: {
      lineHeight: '20px',
    },
    small: {
      lineHeight: '17px',
    },
  },
}

const CompactThemeProvider: React.FC<{}> = ({ children }) => (
  <ThemeProvider overrides={overridesCompactTheme}>{children}</ThemeProvider>
)

export default CompactThemeProvider

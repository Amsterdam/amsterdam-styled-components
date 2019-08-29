import React from 'react'
import { ThemeProvider, Theme } from '..'

// These are the overrides for showing compact text for several typography types
const overridesCompactTheme: Partial<Theme.ThemeInterface> = {
  typography: {
    h2: {
      fontSize: '24px',
      lineHeight: '30px',
    },
    h3: {
      fontSize: '18px',
      lineHeight: '23px',
    },
    h4: {
      fontSize: '16px',
      lineHeight: '20px',
    },
    p: {
      fontSize: '16px',
      lineHeight: '20px',
    },
  },
}

const CompactThemeProvider: React.FC<{}> = ({ children }) => (
  <ThemeProvider overrides={overridesCompactTheme}>{children}</ThemeProvider>
)

export default CompactThemeProvider

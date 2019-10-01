import React from 'react'
import { ThemeProvider, Theme } from '..'

// These are the overrides for showing compact text for several typography types
const overridesCompactTheme: Partial<Theme.ThemeInterface> = {
  typography: {
    h2: {
      fontSize: '24px',
      lineHeight: '30px',
      breakpoints: undefined,
    },
    h3: {
      fontSize: '18px',
      lineHeight: '23px',
      breakpoints: undefined,
    },
    h4: {
      fontSize: '16px',
      lineHeight: '20px',
      breakpoints: undefined,
    },
    p: {
      fontSize: '16px',
      lineHeight: '20px',
      breakpoints: undefined,
    },
  },
}

/**
 * This can be used to decorate a component in order to use this specific theme just for it
 *
 *  @example <caption>Decorate a component to enfoce this theme</caption>
 * <ThemeProvider>
 *  <Heading>I am a header with a default style</Heading>
 *  <CompactThemeProvider>
 *    <Heading>I have a compact style</Heading>
 *  </CompactThemeProvider>
 * </ThemeProvider>
 *
 */
const CompactThemeProvider: React.FC<{}> = ({ children }) => (
  <ThemeProvider overrides={overridesCompactTheme}>{children}</ThemeProvider>
)

export default CompactThemeProvider

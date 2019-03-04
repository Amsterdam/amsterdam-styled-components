import { AscCore, StyledComponents, Theme } from '@datapunt/asc-core'

// Components
export { default as ThemeProvider } from './ThemeProvider'

export { default as Button } from './components/Button'

// Non-components exports
const { GlobalStyle } = AscCore;
export { GlobalStyle, StyledComponents, Theme }

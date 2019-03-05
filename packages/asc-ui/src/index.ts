import {
  AscCore,
  ASCDefaultThemeProvider as ThemeProvider,
  StyledComponents,
  Theme,
} from '@datapunt/asc-core'

// Components
export { default as Button } from './components/Button'
const {
  Icon, ListItem, Divider, ButtonBar,
} = AscCore
export {
  Icon,
  ListItem,
  Divider,
  ButtonBar,
}

// Non-components exports
const { GlobalStyle } = AscCore
export {
  GlobalStyle, StyledComponents, Theme, ThemeProvider,
}

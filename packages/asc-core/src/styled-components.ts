import * as styledComponents from 'styled-components'
import { Theme } from './theme'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      styledComponent: any
    }
  }
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ServerStyleSheet,
  StyleSheetManager,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  Theme.ThemeInterface
>

export {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ServerStyleSheet,
  StyleSheetManager,
}

export default styled

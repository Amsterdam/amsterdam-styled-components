/* eslint-disable import/no-duplicates */
import * as styledComponents from 'styled-components'
import { StyledComponent } from 'styled-components'
import { Theme } from './theme'
import * as ascDefaultTheme from './theme/default'

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
  styledComponents,
  css,
  StyledComponent,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ServerStyleSheet,
  StyleSheetManager,
  Theme,
  ascDefaultTheme,
}

export default styled

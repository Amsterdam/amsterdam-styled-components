import * as styledComponents from 'styled-components'
import ThemeInterface from './theme'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>

export { css, createGlobalStyle, keyframes, ThemeProvider }

export const theme = {
  primaryColor: '#eb1a00',
}

export default styled

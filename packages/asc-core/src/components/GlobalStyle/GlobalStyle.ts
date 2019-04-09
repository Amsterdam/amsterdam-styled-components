import { normalize } from 'polished'
import { createGlobalStyle } from '../../styled-components'
import { THEME_NAME } from '../../theme'
import { fromTheme, getTypography } from '../../utils'

export default createGlobalStyle`
  ${normalize()}
  ${({ theme }) => fromTheme('globalStyle')(theme[THEME_NAME])}

  body {
    font-family: ${({ theme }) => getTypography(theme, 'fontFamily')};
  }

  * {
    box-sizing: border-box;
  }

  [aria-hidden="true"] {
    display: none !important;
  }
`

import { normalize } from 'polished'
import { createGlobalStyle } from '../../styled-components'
import { THEME_NAME } from '../../theme'
import { fromTheme, getTypographyFromTheme } from '../../utils'

export default createGlobalStyle`
  ${normalize()}
  ${({ theme }) => fromTheme('globalStyle')({ theme: theme[THEME_NAME] })}

  body {
    font-family: ${({ theme }) =>
      getTypographyFromTheme(theme[THEME_NAME], 'fontFamily')};
  }

  [aria-hidden="true"] {
    display: none;
  }
`

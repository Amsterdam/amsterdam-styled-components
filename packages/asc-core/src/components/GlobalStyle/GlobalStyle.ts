import { normalize } from 'polished'
import { createGlobalStyle } from '../../styled-components'
import { THEME_NAME } from '../../theme'

export default createGlobalStyle`
  ${normalize()}
  ${({ theme }) => theme[THEME_NAME].globalStyle}

  body {
    font-family: ${({ theme }) => theme[THEME_NAME].typography.primary};
  }
`

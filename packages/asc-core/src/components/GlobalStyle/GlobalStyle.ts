import { normalize } from 'polished'
import { createGlobalStyle } from '../../styled-components'
import { fromTheme, getTypographyFromTheme } from '../../utils'

export default createGlobalStyle`
  ${normalize()}
  ${({ theme }) => fromTheme('globalStyle')({ theme })}

  body {
    font-family: ${({ theme }) => getTypographyFromTheme(theme, 'fontFamily')};
  }
`

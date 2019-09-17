import { normalize } from 'polished'
import { createGlobalStyle } from '@datapunt/asc-core'
import { getValueFromTheme } from '../../utils'

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  ${({ theme }) => getValueFromTheme('globalStyle')({ theme })}

  body {
    font-family: ${getValueFromTheme('typography.fontFamily')};
  }

  [aria-hidden="true"] {
    display: none !important;
  }
  
  * {
    box-sizing: border-box;
  }
  
  *:focus {
    outline: none;
  }
`

export default GlobalStyle

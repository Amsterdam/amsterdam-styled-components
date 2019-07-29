import { normalize } from 'polished'
import { createGlobalStyle } from '@datapunt/asc-core'
import { fromTheme } from '../../utils'

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  ${({ theme }) => fromTheme('globalStyle')({ theme })}

  body {
    font-family: ${fromTheme('typography.fontFamily')};
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

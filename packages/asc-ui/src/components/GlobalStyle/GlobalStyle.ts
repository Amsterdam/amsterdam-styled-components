import { normalize } from 'polished'
import { createGlobalStyle } from '@datapunt/asc-core'
import { fromTheme } from '../../utils'

export default createGlobalStyle`
  ${normalize()}
  ${({ theme }) => fromTheme('globalStyle')({ theme })}

  body {
    font-family: ${fromTheme('typography.fontFamily')};
  }

  [aria-hidden="true"] {
    display: none;
  }
  
  * {
    box-sizing: border-box;
  }
  
  *:focus {
    outline: none;
  }
`

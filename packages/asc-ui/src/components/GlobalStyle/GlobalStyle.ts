import { normalize } from 'polished'
import { createGlobalStyle } from 'styled-components'
import { getValueFromTheme } from '../../utils'

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  ${({ theme }) => getValueFromTheme('globalStyle')({ theme })}

  body {
    font-family: ${getValueFromTheme('typography.fontFamily')};
  }

  /* Display reset for older browsers that don't support certain HTML5 elements */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
      display: block;
  }
  
  /* Use border-box sizing by default for all elements */
  *, *::before, *::after {
    box-sizing: border-box;
  } 
`

export default GlobalStyle

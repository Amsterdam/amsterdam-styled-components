import { css } from '../../styled-components'
import { Theme, THEME_NAME } from '../../theme'
import { getColorFromTheme } from '../../utils'

export default (theme: Theme.ThemeInterface) => css`
  &:focus {
    outline-color: ${getColorFromTheme(theme[THEME_NAME], 'support', 'focus')}
    outline-style: solid;
    outline-width: medium;
  }
`

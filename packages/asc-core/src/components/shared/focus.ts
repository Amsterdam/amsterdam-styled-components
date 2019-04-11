import { css } from '../../styled-components'
import { Theme } from '../../theme'
import { getColorFromTheme } from '../../utils'

export default (theme: Theme.ThemeInterface) => css`
  &:focus {
    outline-color: ${getColorFromTheme(theme, 'support', 'focus')}
    outline-style: solid;
    outline-width: medium;
  }
`

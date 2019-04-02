import { css } from '../../styled-components'
import { Theme } from '../..'
import { getColor } from '../../utils/themeUtils'

export default (theme: Theme.ThemeInterface) => css`
  &:focus {
    outline-color: ${getColor(theme, 'support', 'focus')}
    outline-style: solid;
    outline-width: medium;
  }
`

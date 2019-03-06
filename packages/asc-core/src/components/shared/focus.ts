import { css } from '../../styled-components'
import { Theme } from '../..'
import getThemeColor from '../../utils/getThemeColor'

export default (theme: Theme.ThemeInterface) => css`
  &:focus {
    outline-color: ${getThemeColor(theme, 'support', 'focus')}
    outline-style: solid;
    outline-width: medium;
  }
`

import styled from '../../styled-components'
import { darken, invert } from 'polished'
import { Theme, THEME_NAME } from '../../theme'

interface Props {
  color: Theme.Color
}

function getBackgroundColor(hover: boolean, theme: Theme.ThemeInterface, color?: Theme.Color) {
  const themeColor = getThemeColor(theme, color)
  const mainColor = themeColor || '#E8E8E8'
  return hover ? darken(0.5, mainColor) : mainColor
}

function getThemeColor(theme: Theme.ThemeInterface, color?: Theme.Color) {
  return (color ? theme[THEME_NAME].colors[color] : '#ff0000')
}

const Button = styled.button<Props>`
  border: none;
  color: ${({ color, theme }) => invert(getThemeColor(theme, color))};
  height: 38px;
  cursor: pointer;
  font-size: 1em;
  line-height: 1em;
  background: ${({ color, theme }) => (getBackgroundColor(false, theme, color))};
  background-size: 100% 50%;
  background-repeat: no-repeat;
  padding: 0 10px 0 10px;

  &:hover {
    background: ${({ color, theme }) => (getBackgroundColor(true, theme, color))};
    background-size: 100% 50%;
    background-repeat: no-repeat;
  }
`
export default Button

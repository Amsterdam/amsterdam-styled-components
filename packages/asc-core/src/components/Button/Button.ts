import styled from '../../styled-components'
import { readableColor, shade, transitions } from 'polished'
import { Theme, THEME_NAME } from '../../theme'

export enum Size {
  normal,
  small,
}

interface Props {
  color: Theme.TypeLevel,
  shadow?: boolean,
  size?: Size
}

function getBackgroundColor(hover: boolean, theme: Theme.ThemeInterface, color?: Theme.TypeLevel) {
  const themeColor = getThemeColor(theme, color)
  const mainColor = themeColor || '#E8E8E8'
  return hover ? shade(0.2, mainColor) : mainColor
}

function getThemeColor(theme: Theme.ThemeInterface, color?: Theme.TypeLevel) {
  return (color ? theme[THEME_NAME].colors[color].main : '#ff0000')
}

const Button = styled.button<Props>`
  border: none;
  color: ${({ color, theme }) => readableColor(getThemeColor(theme, color))};
  min-height: 38px;
  cursor: pointer;
  font-size: 1em;
  line-height: 1em;
  background: ${({ color, theme }) => (getBackgroundColor(false, theme, color))};
  background-size: 100% 50%;
  background-repeat: no-repeat;
  padding: 0 10px 0 10px;
  ${({ shadow }) => shadow && 'box-shadow: 1px 1px 1px #ccc;'}
  ${transitions(['color', 'background-color'], '0.1s ease-in-out')};

  &:hover {
    background: ${({ color, theme }) => (getBackgroundColor(true, theme, color))};
    background-size: 100% 50%;
    background-repeat: no-repeat;
  }
`
export default Button

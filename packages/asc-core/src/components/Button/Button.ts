import { ComponentType, MouseEventHandler } from 'react'
import { readableColor, shade, transitions } from 'polished'
import { Theme } from '../../theme'
import styled from '../../styled-components'
import getThemeColor from '../../utils/getThemeColor'

export enum Size {
  normal,
  small,
}

export type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>,
  color?: Theme.TypeLevel,
  shadow?: boolean,
  size?: Size,
  square?: boolean,
  href?: string,
  as?: keyof JSX.IntrinsicElements | ComponentType<any>,
}

function getBackgroundColor(hover: boolean, theme: Theme.ThemeInterface, color?: Theme.TypeLevel) {
  const themeColor = getThemeColor(theme, color)
  const mainColor = themeColor || '#E8E8E8'
  return hover ? shade(0.2, mainColor) : mainColor
}

const Button = styled.button<Props>`
  border: none;
  color: ${({ color, theme }) => readableColor(getThemeColor(theme, color))};
  cursor: pointer;
  font-size: 16px;
  font-weight: normal;
  background: ${({ color, theme }) => (getBackgroundColor(false, theme, color))};
  background-size: 100% 50%;
  background-repeat: no-repeat;
  padding: 0 10px 0 10px;
  ${({ square }) => !square && 'min-height: 38px;'}
  ${({ square }) => !square && 'line-height: 1em;'}
  ${({ square }) => (square ? 'padding: 5px' : 'padding: 0 10px 0 10px;')}
  ${({ shadow }) => shadow && 'box-shadow: 1px 1px 1px #ccc;'}
  ${transitions(['color', 'background-color'], '0.1s ease-in-out')};

  &:hover {
    background: ${({ color, theme }) => (getBackgroundColor(true, theme, color))};
    background-size: 100% 50%;
    background-repeat: no-repeat;
  }
`
export default Button

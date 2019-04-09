import { ComponentType, MouseEventHandler } from 'react'
import { readableColor, transitions } from 'polished'
import { Theme } from '../../theme'
import styled from '../../styled-components'
import getThemeColor from '../../utils/getThemeColor'
import fillSVG from '../../utils/fillSVG'
import focus from '../shared/focus'

export type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>
  color?: Theme.TypeLevel
  size?: 'normal' | 'small'
  square?: boolean
  hoverColor?: string
  href?: string
  as?: keyof JSX.IntrinsicElements | ComponentType<any>
}

const ButtonBase = styled.button<Props>`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: normal;
  padding: 0 10px 0 10px;
  ${({ theme }) => focus(theme)}
  ${transitions(['color', 'background-color'], '0.1s ease-in-out')};

  background: ${({ color, theme }) => getThemeColor(theme, color)};

  &:hover {
    background: ${({ color, theme }) =>
      color
        ? getThemeColor(theme, color, 'dark')
        : getThemeColor(theme, 'tint', 'level3')};
  }

  // ie11 fix
  &:after {
    content: '';
    display: block;
    min-height: inherit;
    font-size: 0;
  }
`

const Button = styled(ButtonBase)<Props>`
  padding: 0 10px 0 10px;
  min-height: 38px;
  line-height: 1em
  color: ${({ color, theme }) =>
    color
      ? readableColor(getThemeColor(theme, color))
      : getThemeColor(theme, 'primary')};

  ${({ theme, color }) =>
    !color && `border: 1px solid ${getThemeColor(theme, 'primary')};`}

  &:hover {
    ${({ theme, color }) =>
      !color && `outline: 1px solid ${getThemeColor(theme, 'primary')};`}
  }

  & svg {
    width: 30px;
    height: 30px;
    ${({ color, theme }) => fillSVG(theme, color)};
  }
`

export const IconButton = styled(ButtonBase)<Props>`
  padding: 5px;
  width: 30px;
  height: 30px;
`
export default Button

import { readableColor, transitions } from 'polished'
import { Theme } from '../../theme'
import styled from '../../styled-components'
import { fillSVG, getColorFromTheme } from '../../utils'
import focus from '../shared/focus'
import { flexboxMinHeightFix } from '../shared/ie-fixes'

export type Props = {
  color?: Theme.TypeLevel
  size?: 'normal' | 'small'
  square?: boolean
  hoverColor?: string
  href?: string
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

  background: ${({ color, theme }) => getColorFromTheme(theme, color)};

  &:hover {
    background: ${({ color, theme }) =>
      color
        ? getColorFromTheme(theme, color, 'dark')
        : getColorFromTheme(theme, 'tint', 'level3')};
  }

  ${flexboxMinHeightFix()}
`

const Button = styled(ButtonBase)<Props>`
  padding: 0 10px 0 10px;
  min-height: 38px;
  line-height: 1em
  color: ${({ color, theme }) =>
    color
      ? readableColor(getColorFromTheme(theme, color))
      : getColorFromTheme(theme, 'primary')};

  ${({ theme, color }) =>
    !color && `border: 1px solid ${getColorFromTheme(theme, 'primary')};`}

  &:hover {
    ${({ theme, color }) =>
      !color && `outline: 1px solid ${getColorFromTheme(theme, 'primary')};`}
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

export const ShareButton = styled(IconButton)<Props>`
  padding: 0px;
  position: relative;
  justify-content: center;
  background: ${({ theme }) => getColorFromTheme(theme, 'tint', 'level5')}};

  &:focus,
  &:hover {
    background: ${({ hoverColor, theme }) =>
      hoverColor || getColorFromTheme(theme, 'secondary')};
  }
`

export default Button

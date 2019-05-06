import { transitions } from 'polished'
import { Theme } from '../../theme'
import styled from '../../styled-components'
import { getColorFromTheme, getFocusStyle } from '../../utils'
import { flexboxMinHeightFix } from '../shared/ie-fixes'

export type Props = {
  color?: Theme.TypeLevel
  size?: 'normal' | 'small'
  square?: boolean
  hoverColor?: string
  href?: string
}

const ButtonBaseStyle = styled.button<Props>`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: normal;
  padding: 0 10px 0 10px;
  ${getFocusStyle()}
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

export default ButtonBaseStyle

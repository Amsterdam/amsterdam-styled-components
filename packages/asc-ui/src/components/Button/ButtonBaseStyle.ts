import { transitions } from 'polished'
import styled, { Theme } from '@datapunt/asc-core'
import {
  color as themeColor,
  focusStyleOutline,
  customCss,
  CustomCssPropsType,
} from '../../utils'
import { flexboxMinHeightFix } from '../shared/ie-fixes'

export type Props = {
  color?: Theme.TypeLevel
  square?: boolean
  hoverColor?: string
  href?: string
  type?: 'button' | 'reset' | 'submit'
  size?: number
} & CustomCssPropsType

const ButtonBaseStyle = styled.button<Props>`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: normal;
  padding: 0 10px 0 10px;
  ${focusStyleOutline()}
  ${transitions(['color', 'background-color'], '0.1s ease-in-out')}
  background: ${({ color, theme }) => themeColor(color)({ theme })};

  &:hover {
    background: ${({ color, theme }) =>
      color
        ? themeColor(color, 'dark')({ theme })
        : themeColor('tint', 'level3')({ theme })};
  }

  ${flexboxMinHeightFix()}
  ${customCss}
`

export default ButtonBaseStyle

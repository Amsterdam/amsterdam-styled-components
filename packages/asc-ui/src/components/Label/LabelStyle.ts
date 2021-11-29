import styled, { css } from 'styled-components'
import { srOnlyStyle, themeColor } from '../../utils'
import { CheckboxWrapperStyle } from '../Checkbox'

interface SharedProps {
  position?: 'top' | 'right' | 'bottom' | 'left'
}

export type Props = {
  srOnly?: boolean
  disabled?: boolean
  align?: 'center' | 'flex-start' | 'flex-end'
} & SharedProps

interface StyleOnlyProps {
  active: boolean
}

const LabelStyle = styled.label<Props & StyleOnlyProps>`
  display: inline-flex;
  align-items: ${({ align }) => align};
  vertical-align: middle;
  color: ${themeColor('tint', 'level7')};
  ${({ srOnly }) => srOnly && srOnlyStyle}
  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.3;
        `
      : css`
          cursor: pointer;
        `}
  ${({ position }) =>
    (position === 'top' || position === 'bottom') &&
    css`
      flex-direction: column;
    `}
  ${({ position }) =>
    position &&
    css`
      & ${CheckboxWrapperStyle} {
        padding-${position}: 12px;
      }
    `}
  
  ${({ active }) =>
    active &&
    css`
      font-weight: 700;
    `}
`

LabelStyle.defaultProps = {
  position: 'right',
  align: 'center',
} as SharedProps

export const LabelTextStyle = styled.span<SharedProps>`
  ${({ position }) =>
    position !== 'top' &&
    position !== 'bottom' &&
    css`
      margin: 9.2px 0; /* To align the label to a checkbox / radiobutton when having a long text. line-height is 1.15 / 18.4px (from normalize css). Margin top & bottom = lineheight / 2 */
    `}
  ${({ position }) =>
    position === 'top' || position === 'left'
      ? css`
          order: 0;
        `
      : css`
          order: 1;
        `}
`

export default LabelStyle

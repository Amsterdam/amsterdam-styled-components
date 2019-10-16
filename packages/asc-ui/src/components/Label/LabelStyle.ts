import styled, { css } from '@datapunt/asc-core'
import { themeColor, srOnlyStyle } from '../../utils'
import { CheckboxWrapperStyle } from '../Checkbox'

type SharedProps = {
  position?: 'top' | 'right' | 'bottom' | 'left'
}

export type Props = {
  srOnly?: boolean
  disabled?: boolean
} & SharedProps

const LabelStyle = styled.label<Props>`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  color: ${themeColor('tint', 'level7')};
  ${srOnlyStyle()}
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
`

LabelStyle.defaultProps = {
  position: 'right',
} as SharedProps

export const LabelTextStyle = styled.span<SharedProps>`
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

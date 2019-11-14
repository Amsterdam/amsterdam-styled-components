import styled, { css } from '@datapunt/asc-core'
import { themeColor, themeSpacing } from '../../utils'
import { outlineStyle } from '../../utils/themeUtils'

enum Variants {
  primary,
  secondary,
  tertiary,
}

export type Props = {
  variant?: keyof typeof Variants
  disabled?: boolean
  error?: boolean
  name?: string
  id: string
  defaultChecked?: boolean
  onChange?: Function
  hasGroup?: boolean
}

const RadioStyle = styled.input.attrs({
  type: 'radio',
})<Props>`
  ${({ hasGroup }) =>
    hasGroup &&
    // Styling only happens when using RadioGroup, otherwise native radio-button functionality breaks
    css`
      top: 0;
      left: 0;
      width: 100%;
      cursor: inherit;
      height: 100%;
      margin: 0;
      padding: 0;
      position: absolute;
      opacity: 0;
    `}
`

export default RadioStyle

export type RadioWrapperStyleProps = {
  variant?: keyof typeof Variants
  selected?: boolean
  disabled?: boolean
  error?: boolean
  hasGroup?: boolean
}

const RadioCircleStyle = styled.div<RadioWrapperStyleProps>`
  ${({ hasGroup }) =>
    hasGroup &&
    css`
      width: ${themeSpacing(6)};
      height: ${themeSpacing(6)};
      color: ${themeColor('tint', 'level5')};
      border: 1px solid;
      border-radius: 50%;
    `}

  ${({ selected }) =>
    selected &&
    css`
      &:after {
        content: '';
        position: absolute;
        height: 16px;
        width: 16px;
        background-color: ${themeColor('tint', 'level7')};
        border-radius: 50%;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
      }
    `}
`

export { RadioCircleStyle }

const RadioWrapperStyle = styled.div<
  RadioWrapperStyleProps & { focus: boolean }
>`
  ${({ hasGroup }) =>
    hasGroup &&
    css`
      position: relative;
      display: inline-flex;
      user-select: none;
      vertical-align: middle;
      flex-shrink: 0; /* IE11 fix */
      padding: ${themeSpacing(1)};
      margin-bottom: 1px;
      margin-right: ${themeSpacing(2)};
    `}

  ${({ hasGroup, focus, theme }) =>
    hasGroup &&
    focus &&
    css`
      ${RadioCircleStyle} {
        ${outlineStyle(theme, 2, 1)};
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
    `}

  ${({ selected, disabled, focus }) =>
    !selected &&
    !disabled && // IE11 fix. If an element is disabled, you can still hover on it on IE11.
    !focus && // don't override the outline if element is also focussed
    css`
      &:hover ${RadioCircleStyle} {
        border: 2px solid;
        color: ${themeColor('tint', 'level7')};
      }
    `}
`

export { RadioWrapperStyle }

import styled, { css } from '@datapunt/asc-core'
import { themeColor, focusStyleOutline } from '../../utils'

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
  isSelected?: boolean
  disabled?: boolean
  focus?: boolean
  error?: boolean
  hasGroup?: boolean
}

const RadioWrapperStyle = styled.div<RadioWrapperStyleProps>`
  ${({ hasGroup }) =>
    hasGroup &&
    css`
      position: relative;
      display: inline-flex;
      user-select: none;
      vertical-align: middle;
      margin-bottom: 1px;
      padding: 6px;
      flex-shrink: 0; /* IE11 fix */
      color: ${themeColor('tint', 'level5')};
      border: 2px solid;
      border-radius: 50%;
    `}

  ${({ isSelected }) =>
    isSelected &&
    css`
      border-color: red;
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
  ${({ isSelected, disabled, focus }) =>
    !isSelected &&
    !disabled && // IE11 fix. If an element is disabled, you can still hover on it on IE11.
    !focus && // don't override the outline if element is also focussed
    css`
      &:hover {
        color: ${themeColor('tint', 'level7')};
      }
    `}
    
  ${focusStyleOutline()}
`

export { RadioWrapperStyle }

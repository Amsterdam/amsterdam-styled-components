import type { ChangeEvent } from 'react'
import styled, { css } from 'styled-components'
import { themeColor, themeSpacing } from '../../utils'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type Props = {
  disabled?: boolean
  error?: boolean
  name?: string
  value?: string
  id: string
  checked?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const RadioStyle = styled.input.attrs({
  type: 'radio',
})<Props>`
  cursor: inherit;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 24px;
  height: 24px;
  left: 4px;
  top: 4px;
  outline-width: 10px;
`

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type StyleOnlyProps = {
  checked?: boolean
  disabled?: boolean
  error?: boolean
  focus?: boolean
}

const RadioCircleStyle = styled.span<StyleOnlyProps>`
  width: 24px;
  height: 24px;
  color: ${themeColor('tint', 'level5')};
  background-color: ${themeColor('tint', 'level1')};
  border: 1px solid;
  border-radius: 50%;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    background-color: ${themeColor('tint', 'level7')};
    opacity: 0;
    z-index: 1;
    ${({ checked }) =>
      checked &&
      css`
        opacity: 1;
      `}
  }

  ${({ error, checked, disabled, focus }) =>
    error &&
    !checked &&
    !disabled &&
    !focus &&
    css`
      border-width: 2px;
      color: red;
    `}
`

const RadioWrapperStyle = styled.span<StyleOnlyProps & { focus: boolean }>`
  position: relative;
  display: inline-flex;
  user-select: none;
  vertical-align: middle;
  flex-shrink: 0; /* IE11 fix */
  padding: ${themeSpacing(1)};
  margin-bottom: 1px;
  margin-right: ${themeSpacing(2)};

  input:focus ~ span {
    display: inline-block;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
    `}

  ${({ checked, disabled, focus }) =>
    !checked &&
    !disabled && // IE11 fix. If an element is disabled, you can still hover on it on IE11.
    !focus && // don't override the outline if element is also focussed
    css`
      &:hover ${RadioCircleStyle} {
        border: 2px solid;
        color: ${themeColor('tint', 'level7')};
      }
    `}
`

export { RadioWrapperStyle, RadioCircleStyle }
export default RadioStyle

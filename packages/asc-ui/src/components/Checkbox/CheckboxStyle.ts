import styled, { css } from 'styled-components'
import { svgFill, themeColor } from '../../utils'
import { IconStyle } from '../Icon'

type CheckboxVariant = 'primary' | 'secondary' | 'tertiary'

export type Props = {
  variant?: CheckboxVariant
  checked?: boolean
  disabled?: boolean
  error?: boolean
  indeterminate?: boolean
}

const getVariant = () => ({ variant }: Props) => {
  switch (variant) {
    case 'primary':
      return css`
        color: ${themeColor('primary', 'main')};
        background-color: ${themeColor('primary', 'main')};
        ${svgFill(themeColor('tint', 'level1'))};
      `

    case 'secondary':
      return css`
        color: ${themeColor('secondary', 'main')};
        background-color: ${themeColor('secondary', 'main')};
        ${svgFill(themeColor('tint', 'level1'))};
      `

    case 'tertiary':
      return css`
        color: ${themeColor('tint', 'level7')};
        background-color: ${themeColor('tint', 'level1')};
        ${svgFill(themeColor('tint', 'level7'))};
      `

    default:
      return css`
        color: ${themeColor('tint', 'level7')};
        background-color: ${themeColor('tint', 'level7')};
        ${svgFill(themeColor('tint', 'level1'))};
      `
  }
}

export default styled.input.attrs({
  type: 'checkbox',
})<Props>`
  cursor: inherit;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 24px;
  height: 24px;
  left: 6px;
  top: 6px;
`

const CheckboxIconStyle = styled(IconStyle)<Props>`
  display: flex;
  border-width: 1px;
  border-style: solid;
  width: 22px;
  height: 22px;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: ${themeColor('tint', 'level1')};
  transition: background-color 0.2s ease-in-out;
  pointer-events: none;
  ${({ checked, indeterminate }) =>
    (checked || indeterminate) &&
    css`
      ${getVariant()};
    `};
`

const CheckboxWrapperStyle = styled.div<Props>`
  position: relative;
  display: inline-flex;
  user-select: none;
  vertical-align: middle;
  margin-bottom: 1px;
  padding: 6px;
  flex-shrink: 0; /* IE11 fix */
  color: ${themeColor('tint', 'level5')};
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
    `}
  ${({ checked, disabled }) =>
    !checked &&
    !disabled && // IE11 fix. If an element is disabled, you can still hover on it on IE11.
    css`
      &:hover {
        color: ${themeColor('tint', 'level7')};

        ${CheckboxIconStyle} {
          outline-style: solid;
          outline-width: 1px;
        }
      }
    `}
    ${({ error, checked, disabled }) =>
    error &&
    !checked &&
    !disabled &&
    css`
      ${CheckboxIconStyle} {
        border-color: red;
        outline: 1px solid red;
      }
    `}
`

export { CheckboxWrapperStyle, CheckboxIconStyle }

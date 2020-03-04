import styled, { css } from '@datapunt/asc-core'
import { themeColor, focusStyleOutline, svgFill } from '../../utils'
import { IconStyle } from '../Icon'
import { outlineStyle } from '../../utils/themeUtils'

type CheckboxVariant = 'primary' | 'secondary' | 'tertiary'

export type Props = {
  variant?: CheckboxVariant
  checked?: boolean
  disabled?: boolean
  error?: boolean
}

const getVariant = () => ({ variant }: Props) => {
  switch (variant) {
    case 'primary':
      return css`
        color: ${themeColor('primary', 'main')};
        background-color: ${themeColor('primary', 'main')};
        ${svgFill('tint', 'level1')};
      `

    case 'secondary':
      return css`
        color: ${themeColor('secondary', 'main')};
        background-color: ${themeColor('secondary', 'main')};
        ${svgFill('tint', 'level1')};
      `

    case 'tertiary':
      return css`
        color: ${themeColor('tint', 'level7')};
        background-color: ${themeColor('tint', 'level1')};
        ${svgFill('tint', 'level7')};
      `

    default:
      return css`
        color: ${themeColor('tint', 'level7')};
        background-color: ${themeColor('tint', 'level7')};
        ${svgFill('tint', 'level1')};
      `
  }
}

export default styled.input.attrs({
  type: 'checkbox',
})<Props>`
  top: 0;
  left: 0;
  width: 100%;
  cursor: inherit;
  height: 100%;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
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
  transition: background-color 0.2s ease-in-out;
  ${({ checked }) =>
    checked &&
    css`
      ${getVariant()};
    `}
`

const CheckboxWrapperStyle = styled.div<Props & { focus: boolean }>`
  position: relative;
  display: inline-flex;
  user-select: none;
  vertical-align: middle;
  margin-bottom: 1px;
  padding: 6px;
  flex-shrink: 0; /* IE11 fix */
  color: ${themeColor('tint', 'level5')};
  ${({ focus, theme }) =>
    focus &&
    css`
      ${CheckboxIconStyle} {
        ${outlineStyle(theme, 2, 1)};
      }
    `}
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
      &:hover {
        color: ${themeColor('tint', 'level7')};

        ${CheckboxIconStyle} {
          outline-style: solid;
          outline-width: 1px;
        }
      }
    `}
    ${({ error, checked, disabled, focus }) =>
      error &&
      !checked &&
      !disabled &&
      !focus &&
      css`
        ${CheckboxIconStyle} {
          border-color: red;
          outline: 1px solid red;
        }
      `}
  ${focusStyleOutline()}
`

export { CheckboxWrapperStyle, CheckboxIconStyle }

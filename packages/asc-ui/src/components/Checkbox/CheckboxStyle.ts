import styled, { css } from '@datapunt/asc-core'
import { themeColor, focusStyleOutline, svgFill } from '../../utils'
import { IconStyle } from '../Icon'
import { ButtonVariants } from '../Button/ButtonStyle'
import { outlineStyle } from '../../utils/themeUtils'

enum Variants {
  primary,
  secondary,
}

export type Props = {
  variant?: keyof typeof Variants
  checked?: boolean
  disabled?: boolean
}

const getVariant = () => ({
  variant,
}: {
  variant?: keyof typeof ButtonVariants
}) => {
  switch (variant) {
    case 'primary':
      return css`
        color: ${themeColor('primary', 'main')};
        background-color: ${themeColor('primary', 'main')};
      `

    case 'secondary':
      return css`
        color: ${themeColor('secondary', 'main')};
        background-color: ${themeColor('secondary', 'main')};
      `

    default:
      return css`
        color: ${themeColor('tint', 'level7')};
        background-color: ${themeColor('tint', 'level7')};
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
  margin: 2px;
  position: relative;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease-in-out;
  ${({ checked }) =>
    checked &&
    css`
      ${getVariant()};
    `}

  ${svgFill('tint', 'level1')};
`

const CheckboxWrapper = styled.div<Props & { focus: boolean }>`
  position: relative;
  display: inline-flex;
  user-select: none;
  vertical-align: middle;
  padding: 10px;
  ${({ focus, theme }) =>
    focus &&
    css`
      ${CheckboxIconStyle} {
        ${outlineStyle(theme, 2, 1)}
      }
    `}
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
          outline-width: 2px;
        }
      }
    `}
  

  ${focusStyleOutline()}
`

export { CheckboxWrapper, CheckboxIconStyle }

import styled, { css } from '@datapunt/asc-core'
import { color, focusStyleOutline, svgFill } from '../../utils'
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
        color: ${color('primary', 'main')};
        background-color: ${color('primary', 'main')};
      `

    case 'secondary':
      return css`
        color: ${color('secondary', 'main')};
        background-color: ${color('secondary', 'main')};
      `

    default:
      return css`
        color: ${color('tint', 'level7')};
        background-color: ${color('tint', 'level7')};
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
    !disabled && // IE11 fix
    css`
      &:hover {
        color: ${color('tint', 'level7')};

        ${CheckboxIconStyle} {
          outline-style: solid;
          outline-width: 2px;
        }
      }
    `}
  

  ${focusStyleOutline()}
`

export { CheckboxWrapper, CheckboxIconStyle }

import styled, { css } from '@datapunt/asc-core'
import { svg } from '@datapunt/asc-assets'
import { themeColor, themeSpacing } from '../../utils'
import { outlineStyle } from '../../utils/themeUtils'

export type Props = {
  id?: string
  value?: string
  disabled?: boolean
  error?: boolean
}

const SelectBoxShadow = (color: any) => css`
  box-shadow: inset 0 0 0 1px ${color};
`

const SelectStyle = styled.select<Props>`
  width: 100%;
  padding: ${themeSpacing(3)};
  font-size: 1rem;
  border: 0;
  border-radius: 0;
  background-image: url("${svg.ChevronDown}");
  background-position: calc(100% - ${themeSpacing(3)}) 50%;
  background-repeat: no-repeat;
  background-size: ${themeSpacing(3)};
  appearance: none;
  cursor: pointer;
  ${SelectBoxShadow(themeColor('tint', 'level5'))}
  
  /* IE11 (hide native arrow button) */
  &::-ms-expand {
    display: none;
  }
  
  /* Firefox (hide native focus state) */
  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }

  &:hover {
    ${({ disabled }) =>
      !disabled &&
      css`
        ${SelectBoxShadow(themeColor('tint', 'level7'))}
      `}
  }
  
  &:focus {
    ${({ theme }) =>
      css`
        ${outlineStyle(theme, 2)};
      `}
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
    ${SelectBoxShadow(themeColor('tint', 'level4'))};
  }

  ${({ error }) =>
    error &&
    css`
      ${SelectBoxShadow(themeColor('error', 'main'))}
    `}
`

export default SelectStyle

import styled, { css } from 'styled-components'
import { ChevronDown } from '@datapunt/asc-assets'
import { themeColor, themeSpacing } from '../../utils'
import { outlineStyle } from '../../utils/themeUtils'
import { Theme } from '../../types'

export type Props = {
  id?: string
  value?: string
  label?: string
  disabled?: boolean
  srOnly?: boolean
  error?: boolean | string
  errorMessage?: string
  labelStyle?: object
  errorStyle?: object
}

const SelectBoxShadow = (
  color: ({ theme }: { theme: Theme.ThemeInterface }) => string,
) => css`
  box-shadow: inset 0 0 0 1px ${color};
`

export const SelectIcon = styled(ChevronDown)`
  position: absolute;
  display: block;
  width: ${themeSpacing(3)};
  height: ${themeSpacing(3)};
  top: calc(50% - ${themeSpacing(3 / 2)});
  right: ${themeSpacing(3)};
`

export const SelectWrapper = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
`

const SelectStyle = styled.select<Props>`
  width: 100%;
  height: 100%;
  padding: 0 ${themeSpacing(3)};
  font-size: 1rem;
  border: 0;
  border-radius: 0;
  background-color: ${themeColor('tint', 'level1')};
  appearance: none;
  cursor: pointer;
  ${SelectBoxShadow(themeColor('tint', 'level5'))}

  /* IE11 (hide native arrow button) */
  &::-ms-expand {
    display: none;
  }

  /* IE11 (hide native focus state) */
  &::-ms-value {
    color: black;
    background: transparent;
  }

  /* Firefox (hide native focus state) */
  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 ${themeColor('tint', 'level7')};
  }

  &:hover {
    ${({ disabled, error }) =>
      !disabled &&
      !error &&
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

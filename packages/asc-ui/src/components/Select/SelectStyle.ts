import { ChevronDown } from '@amsterdam/asc-assets'
import { CSSProperties, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { themeColor, themeSpacing } from '../../utils'
import { INPUT_SIZE } from '../shared/constants'

export type Props = {
  id?: string
  value?: string
  label?: ReactNode
  disabled?: boolean
  srOnly?: boolean
  error?: boolean | string
  errorMessage?: string
  labelStyle?: CSSProperties
  errorStyle?: CSSProperties
}

export const SelectWrapper = styled.div`
  position: relative;
  height: ${INPUT_SIZE}px;
  width: 100%;
`

/**
 * Contains all of the absolute content which is placed above the select element.
 */
export const AbsoluteContentWrapper = styled.div.attrs({
  'aria-hidden': 'true',
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 3px; /* Allows the default browser(s) default focus style to be displayed. */
  padding: 0 calc(${themeSpacing(3)} - 1px); /* Match the spacing of the select element. */
  display: flex;
  align-items: center;
  pointer-events: none;
  background-color: ${themeColor('tint', 'level1')};
`

/**
 * Since Chrome does not support `text-overflow: hidden` we need show the value in a separate element.
 */
export const SelectedValue = styled.div<{ disabled?: boolean }>`
  margin-right: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}
`
export const SelectIcon = styled(ChevronDown)`
  display: block;
  width: ${themeSpacing(3)};
  height: ${themeSpacing(3)};
  margin-left: ${themeSpacing(3)};
`

const SelectStyle = styled.select<Props>`
  width: 100%;
  height: 100%;
  padding: ${themeSpacing(2, 3)};
  font-size: 1rem;
  border: 1px solid ${themeColor('tint', 'level5')};
  border-radius: 0;
  background-color: ${themeColor('tint', 'level1')};
  appearance: none;
  cursor: pointer;

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
        border: 1px solid ${themeColor('tint', 'level7')};
      `}
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
    border: 1px solid ${themeColor('tint', 'level4')};
  }

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${themeColor('error', 'main')};
    `}
`

export default SelectStyle

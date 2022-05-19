import { transitions } from 'polished'
import styled, { css } from 'styled-components'
import {
  svgFill,
  themeColor,
  calculateFluidStyle,
  themeSpacing,
} from '../../utils'
import Icon from '../Icon'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'blank'

export const IconLeft = styled(Icon)`
  margin-right: 10px;
`
export const IconRight = styled(Icon)`
  margin-left: 10px;
`

function getVariant({ variant }: { variant?: ButtonVariant }) {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${themeColor('primary')};
        color: ${themeColor('tint', 'level1')};
        ${svgFill(themeColor('tint', 'level1'))};
        padding: ${themeSpacing(1, 2)};

        &:focus,
        &:hover {
          background-color: ${themeColor('primary', 'dark')};
        }

        :disabled {
          color: ${themeColor('tint', 'level1')};
          background-color: ${themeColor('tint', 'level3')};
        }
      `

    case 'secondary':
      return css`
        background-color: ${themeColor('tint', 'level1')};
        color: ${themeColor('primary')};
        ${svgFill(themeColor('primary'))};
        padding: ${themeSpacing(1, 2)};
        box-shadow: inset 0 0 0 2px ${themeColor('primary')};

        &:focus,
        &:hover {
          box-shadow: inset 0 0 0 3px ${themeColor('primary', 'dark')};
          color: ${themeColor('primary', 'dark')};
          ${svgFill(themeColor('primary', 'dark'))};
        }

        :disabled {
          color: ${themeColor('tint', 'level3')};
          background-color: ${themeColor('tint', 'level1')};
          box-shadow: inset 0 0 0 2px ${themeColor('tint', 'level3')};
          ${svgFill(themeColor('tint', 'level3'))};
        }
      `

    case 'tertiary':
      return css`
        background-color: ${themeColor('tint', 'level1')};
        ${svgFill(themeColor('primary'))};
        color: ${themeColor('primary')};
        padding: ${themeSpacing(1, 2)};

        &:focus,
        &:hover {
          box-shadow: inset 0 0 0 2px ${themeColor('tint', 'level3')};
        }

        :disabled {
          color: ${themeColor('tint', 'level3')};
          ${svgFill(themeColor('tint', 'level3'))};
          box-shadow: none;
        }
      `

    case 'blank':
      return css`
        background-color: ${themeColor('tint', 'level1')};
        ${svgFill(themeColor('tint', 'level6'))};
        padding: ${themeSpacing(2)};

        &:hover {
          ${svgFill(themeColor('primary'))};
        }
      `

    default:
      return null
  }
}

export interface ButtonStyleProps {
  variant?: ButtonVariant
  small?: boolean
}

const ButtonStyle = styled.button<ButtonStyleProps>`
  font-weight: 500;
  letter-spacing: 0.0125rem;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: ${({ small }) =>
    small ? calculateFluidStyle(16, 18) : calculateFluidStyle(18, 24)};
  line-height: ${({ small }) =>
    small ? calculateFluidStyle(22, 24) : calculateFluidStyle(29, 38)};

  ${transitions(['color', 'background-color'], '0.1s ease-in-out')}
  ${(variant) => getVariant(variant)}
  ${Icon} {
    flex-shrink: 0;
  }

  &:disabled {
    cursor: default;
    outline: none;
    border: none;
    text-decoration: none;
  }
`

export default ButtonStyle

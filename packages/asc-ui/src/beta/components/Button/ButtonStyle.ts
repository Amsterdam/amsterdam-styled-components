import styled, { css } from 'styled-components'
import {
  fluidTypoStyle,
  typographyStyle,
  svgFill,
  themeColor,
  themeSpacing,
} from '../../utils'

export interface Props {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'blank'
}

const baseStyle = css`
  font-weight: 500;
  letter-spacing: 0.0125rem;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border: none;
  cursor: pointer;

  :disabled {
    ${svgFill('white')}
    cursor: default;
    outline: none;
    border: none;
    text-decoration: none;
  }
`

export const primaryButtonStyle = css`
  ${svgFill('white')}
  background-color: ${themeColor('primary')};
  color: white;
  padding: ${themeSpacing(3, 6)};

  :focus,
  :hover {
    background-color: ${themeColor('primary', 'dark')};
  }

  :disabled {
    color: white;
    background-color: ${themeColor('tint', 'level5')};
  }

  ${baseStyle}
`

export const secondaryButtonStyle = css`
  ${svgFill(themeColor('primary'))}
  background-color: white;
  color: ${themeColor('primary')};
  padding: ${themeSpacing(3, 6)};
  box-shadow: inset 0 0 0 2px ${themeColor('primary')};

  :focus,
  :hover {
    box-shadow: inset 0 0 0 4px ${themeColor('primary')};
  }

  :disabled {
    color: ${themeColor('tint', 'level5')};
    background-color: white;
    box-shadow: inset 0 0 0 2px ${themeColor('tint', 'level5')};
  }

  ${baseStyle}
`

export const tertiaryButtonStyle = css`
  ${svgFill(themeColor('primary'))}
  color: ${themeColor('primary')};
  background-color: transparent;

  :hover {
    text-decoration: underline;
  }

  :disabled {
    color: ${themeColor('tint', 'level5')};
  }

  ${baseStyle}
`

export const blankButtonStyle = css`
  ${svgFill(themeColor('tint', 'level7'))}
  padding: ${themeSpacing(3, 3)};
  background-color: white;

  &:hover {
    ${svgFill(themeColor('primary'))}
  }

  ${baseStyle}
`

const ButtonStyle = styled.button<Props>`
  /*
    fluidTypoStyle sets the font-size and line-height.
    It can be overwritten with specific variant styles.
  */
  ${fluidTypoStyle}
  ${({ variant }) => {
    switch (variant) {
      case 'secondary':
        return secondaryButtonStyle
      case 'tertiary':
        return tertiaryButtonStyle
      case 'blank':
        return blankButtonStyle
      default:
        return primaryButtonStyle
    }
  }}

  ${typographyStyle}
`

export default ButtonStyle

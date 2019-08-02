import styled, { Theme, css } from '@datapunt/asc-core'
import { transitions, readableColor, darken, size } from 'polished'
import {
  color as themeColor,
  focusStyleOutline,
  customCss,
  CustomCssPropsType,
  color as getColor,
  svgFill,
} from '../../utils'
import { flexboxMinHeightFix } from '../shared/ie-fixes'
import IconStyle from '../Icon/IconStyle'

enum ButtonVariants {
  primary,
  secondary,
  tertiary,
  primaryInverted,
  blank,
}

const getVariant = () => ({
  theme,
  variant,
  color,
}: {
  theme: any
  variant?: keyof typeof ButtonVariants
  color?: Theme.TypeLevel
}) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${themeColor('primary')({ theme })};
        color: ${readableColor(themeColor('primary')({ theme }))};
        ${svgFill('tint', 'level1')};

        &:hover {
          background-color: ${darken(0.1, themeColor('primary')({ theme }))};
        }
      `

    case 'secondary':
      return css`
        background-color: ${themeColor('secondary')({ theme })};
        color: ${themeColor('tint', 'level1')({ theme })};
        ${svgFill('tint', 'level1')};

        &:hover {
          background-color: ${darken(0.1, themeColor('secondary')({ theme }))};
        }
      `

    case 'tertiary':
      return css`
        background-color: ${themeColor('tint', 'level4')({ theme })};

        &:hover {
          background-color: ${darken(
            0.1,
            themeColor('tint', 'level4')({ theme }),
          )};
        }
      `

    case 'primaryInverted':
      return css`
        color: ${getColor('primary')({ theme })};
        outline: 1px solid ${getColor('primary')({ theme })};
        ${svgFill('primary')};

        &:hover {
          outline-width: 2px;
        }
      `

    case 'blank':
      return css`
        ${svgFill('tint', 'level7')}
        &:hover {
          background-color: ${themeColor('tint', 'level3')({ theme })};
        }
      `
    default:
      // About-to-be-deprecated codeblock to support the 'color' prop
      return css`
        color: ${color
          ? readableColor(getColor(color)({ theme }))
          : getColor('primary')({ theme })};
        ${color &&
          css`
            background: ${themeColor(color)({ theme })};
          `}

        ${!color &&
          css`
            outline: 1px solid ${getColor('primary')({ theme })};
          `}

        &:hover {
          background: ${color
            ? themeColor(color, 'dark')({ theme })
            : themeColor('tint', 'level3')({ theme })};
          ${!color &&
            css`
              outline-width: 2px;
            `}
        }
      `
  }
}

export type Props = {
  /**
   * Deprecated: Use variant instead. Pass the theme-color.
   * @deprecated
   */
  color?: Theme.TypeLevel
  /**
   * Deprecated: use size to create a button with equal width and height
   * @deprecated
   */
  square?: boolean
  /**
   * Set an equal height and width
   */
  size?: number
  /**
   * A variant, usually different background-color and color of a button
   */
  variant?: keyof typeof ButtonVariants
} & CustomCssPropsType

const ButtonStyle = styled.button<Props>`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 1em;
  padding: ${({ size: sizeProp }) => (sizeProp ? '0' : '4px 10px 4px 10px')};
  ${({ size: sizeProp, square }) =>
    sizeProp || square // make the button square
      ? css`
          display: flex;
          align-items: center;
          justify-content: center;
          ${size(sizeProp || 30)} // width and height
        `
      : css`
          // extra styles for a non-square button
          min-height: 36px;
          & > ${IconStyle} {
            &:first-of-type {
              margin-right: 5px;
            }
            &:last-of-type {
              margin-left: 5px;
            }
          }
        `}
  ${focusStyleOutline()}
  ${transitions(['color', 'background-color'], '0.1s ease-in-out')}
  ${getVariant()}
  ${flexboxMinHeightFix()} // ie fix
  ${customCss}
  &:disabled {
    cursor: default;
    outline: none;
    color: ${themeColor('tint', 'level4')};
    background-color: ${themeColor('tint', 'level3')};
    ${svgFill('tint', 'level4')};
  }
`

export default ButtonStyle

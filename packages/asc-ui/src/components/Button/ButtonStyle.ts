import styled, { Theme, css } from '@datapunt/asc-core'
import { transitions, readableColor, darken, size } from 'polished'
import {
  themeColor,
  focusStyleOutline,
  svgFill,
  themeSpacing,
} from '../../utils'
import { flexboxMinHeightFix } from '../shared/ie-fixes'
import Icon from '../Icon'

export enum ButtonVariants {
  primary,
  secondary,
  tertiary,
  primaryInverted,
  textButton,
  blank, // blank variant is a plain white button with a grey background on hover
  application,
}

const defaultProps = {
  size: 30,
}

export const ArrowRight = styled.div`
  position: absolute;
  top: 0;
  right: -37px;
  width: 0;
  height: 0;
  border: 22px solid rgba(255, 255, 255, 0);
  border-left: 15px solid ${themeColor('secondary')};
  ${transitions('border-color', '0.1s ease-in-out')}
  :after {
    content: '';
    position: absolute;
    top: -26px;
    right: -30px;
    width: 0;
    height: 0;
    border: 26px solid rgba(255, 255, 255, 0);
    border-left: 17px solid ${themeColor('support', 'focus')};
    z-index: -1;
    opacity: 0;
  }
`

const getVariant = () => ({
  theme,
  variant,
  color,
}: {
  theme: any
  variant?: keyof typeof ButtonVariants
  color?: Theme.ColorType
}) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${themeColor('primary')};
        color: ${readableColor(themeColor('primary')({ theme }))};
        ${svgFill('tint', 'level1')};

        &:hover {
          background-color: ${darken(0.1, themeColor('primary')({ theme }))};
        }
      `

    case 'secondary':
      return css`
        background-color: ${themeColor('secondary')};
        color: ${themeColor('tint', 'level1')};
        ${svgFill('tint', 'level1')};

        &:hover {
          background-color: ${darken(0.1, themeColor('secondary')({ theme }))};
        }

        ${taskflow =>
          taskflow &&
          css`
            &:not(:disabled)&:hover ${ArrowRight} {
              border-left-color: ${darken(
                0.1,
                themeColor('secondary')({ theme }),
              )};
            }
          `}
      `

    case 'tertiary':
      return css`
        background-color: ${themeColor('tint', 'level4')};
        ${svgFill('tint', 'level7')};

        &:hover {
          background-color: ${darken(
            0.1,
            themeColor('tint', 'level4')({ theme }),
          )};
        }
      `

    case 'primaryInverted':
      return css`
        color: ${themeColor('primary')};
        border: 1px solid ${themeColor('primary')};
        ${svgFill('primary')};

        &:hover {
          outline: 1px solid ${themeColor('primary')};
        }
      `

    case 'textButton':
      return css`
        color: ${themeColor('primary')};
        background-color: rgba(0, 0, 0, 0);
        ${svgFill('primary')};

        &:hover {
          color: ${themeColor('secondary')};
          ${svgFill('secondary')};
        }
      `

    case 'blank':
      return css`
        background-color: ${themeColor('tint', 'level1')};
        ${svgFill('tint', 'level7')}
        &:hover {
          background-color: ${themeColor('tint', 'level3')};
        }
      `
    case 'application':
      return css`
        border: 1px solid ${themeColor('tint', 'level7')};
        background-color: ${themeColor('tint', 'level1')};
        height: 32px;
        padding: ${themeSpacing(1, 2)};
        ${svgFill('tint', 'level7')}
        &:hover {
          background-color: ${themeColor('tint', 'level4')};
        }
      `
    default:
      // About-to-be-deprecated codeblock to support the 'color' prop
      return css`
        color: ${color
          ? readableColor(themeColor(color)({ theme }))
          : themeColor('primary')({ theme })};
        ${color &&
          css`
            background: ${themeColor(color)};
          `}

        ${!color &&
          css`
            border: 1px solid ${themeColor('primary')};
          `}

        &:hover {
          background: ${color
            ? themeColor(color, 'dark')({ theme })
            : themeColor('tint', 'level3')({ theme })};
          ${!color &&
            css`
              outline: 1px solid ${themeColor('primary')};
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
  color?: Theme.ColorType
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
  /**
   * Add narrow arrow on the right side of the secondary button
   */
  taskflow?: boolean
}

export const IconLeft = styled(Icon)`
  margin-right: 10px;
`
export const IconRight = styled(Icon)`
  margin-left: 10px;
`

const ButtonStyle = styled.button<Props>`
  height: 44px;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  padding: ${({ size: sizeProp }) => (sizeProp ? '0' : '12px 15px')};
  ${({ size: sizeProp, square }) =>
    (sizeProp || square) && // make the button square
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      ${size(sizeProp || defaultProps.size)} // width and height
    `}
  ${focusStyleOutline()}
  ${transitions(['color', 'background-color'], '0.1s ease-in-out')}
  ${getVariant()}
  ${flexboxMinHeightFix()} // ie fix
  ${({ taskflow }) =>
    taskflow &&
    css`
      position: relative;
      z-index: 0;
      && {
        margin-right: 25px;
      }
      &:focus ${ArrowRight}:after {
        opacity: 1;
      }
    `}
  ${({ variant }) =>
    variant &&
    variant === 'textButton' &&
    css`
      // remove transition because it's async with Icon
      ${transitions('color', '0s')}
      ${IconLeft} {
        margin-right: 5px;
      }
      ${IconRight} {
        margin-left: 5px;
      }
    `}
  &:disabled {
    cursor: default;
    outline: none;
    border: none;
    color: ${themeColor('tint', 'level4')};
    background-color: ${themeColor('tint', 'level3')};
    ${svgFill('tint', 'level4')};
    text-decoration: none;
    ${({ taskflow }) =>
      taskflow &&
      css`
        ${ArrowRight} {
          border-left-color: ${themeColor('tint', 'level3')};
        }
      `}
    ${({ variant }) =>
      variant &&
      variant === 'textButton' &&
      css`
        background-color: rgba(0, 0, 0, 0);
      `}
    }
`

export default ButtonStyle

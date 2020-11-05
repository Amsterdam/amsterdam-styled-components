import { darken, readableColor, size, transitions } from 'polished'
import styled, { css } from 'styled-components'
import { Theme } from '../../types'
import { svgFill, themeColor, themeSpacing } from '../../utils'
import Icon from '../Icon'
import { flexboxMinHeightFix } from '../shared/ie-fixes'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'primaryInverted'
  | 'textButton'
  | 'blank'
  | 'application'

const defaultProps = {
  size: 30,
}

export const getButtonHeight = (theme: Theme.ThemeInterface) =>
  themeSpacing(11)({ theme })

export const ArrowRight = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  width: 0;
  height: 0;
  border: 22px solid rgba(255, 255, 255, 0);
  border-left: 15px solid ${themeColor('secondary')};
  border-right: 0;
  ${transitions('border-color', '0.1s ease-in-out')}
`

export const IconLeft = styled(Icon)`
  margin-right: 10px;
`
export const IconRight = styled(Icon)`
  margin-left: 10px;
`

const getVariant = () => ({
  theme,
  variant,
  color,
}: {
  theme: Theme.ThemeInterface
  variant?: ButtonVariant
  color?: Theme.ColorType
}) => {
  switch (variant) {
    case 'primary':
      return css`
        min-width: 90px;
        background-color: ${themeColor('primary')};
        color: ${readableColor(themeColor('primary')({ theme }))};
        ${svgFill(themeColor('tint', 'level1'))};

        &:focus,
        &:hover {
          background-color: ${darken(0.1, themeColor('primary')({ theme }))};
        }
      `

    case 'secondary':
      return css`
        min-width: 90px;
        background-color: ${themeColor('secondary')};
        color: ${themeColor('tint', 'level1')};
        ${svgFill(themeColor('tint', 'level1'))};

        &:focus,
        &:hover {
          background-color: ${darken(0.1, themeColor('secondary')({ theme }))};
        }

        ${(taskflow) =>
          taskflow &&
          css`
            &:not(:disabled)&:focus
              ${ArrowRight},
              &:not(:disabled)&:hover
              ${ArrowRight} {
              border-left-color: ${darken(
                0.1,
                themeColor('secondary')({ theme }),
              )};
            }
          `}
      `

    case 'tertiary':
      return css`
        min-width: 90px;
        background-color: ${themeColor('tint', 'level4')};
        ${svgFill(themeColor('tint', 'level7'))};

        &:focus,
        &:hover {
          background-color: ${darken(
            0.1,
            themeColor('tint', 'level4')({ theme }),
          )};
        }
      `

    case 'primaryInverted':
      return css`
        min-width: 90px;
        color: ${themeColor('primary')};
        border: 1px solid ${themeColor('primary')};
        background-color: ${themeColor('tint', 'level1')};
        ${svgFill(themeColor('primary', 'main'))};

        &:hover {
          outline: 1px solid ${themeColor('primary')};
        }
      `

    case 'textButton':
      return css`
        height: auto;
        padding: 0;
        align-self: baseline;
        white-space: normal;
        text-align: left;
        color: ${themeColor('primary')};
        background-color: rgba(0, 0, 0, 0);
        ${svgFill(themeColor('primary', 'main'))};

        /* remove transition because it's async with Icon */
        ${transitions('color', '0s')}

        &:hover {
          color: ${themeColor('secondary')};
          ${svgFill(themeColor('secondary', 'main'))};
        }

        ${IconLeft} {
          margin-right: ${themeSpacing(1)};
        }
        ${IconRight} {
          margin-left: ${themeSpacing(1)};
        }
      `

    case 'blank':
      return css`
        background-color: ${themeColor('tint', 'level1')};
        ${svgFill(themeColor('tint', 'level7'))};
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
        ${svgFill(themeColor('tint', 'level7'))};
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

export type ButtonStyleProps = {
  /**
   * @deprecated Use variant instead. Pass the theme-color.
   */
  color?: Theme.ColorType
  /**
   * @deprecated Use size to create a button with equal width and height
   */
  square?: boolean
  /**
   * Set an equal height and width
   */
  size?: number
  /**
   * A variant, usually different background-color and color of a button
   */
  variant?: ButtonVariant
  /**
   * Add narrow arrow on the right side of the secondary button
   */
  taskflow?: boolean
}

const ButtonStyle = styled.button<ButtonStyleProps>`
  height: ${({ theme }) => getButtonHeight(theme)};
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  padding: ${({ size: sizeProp, theme }) =>
    sizeProp ? '0' : themeSpacing(3, 4)({ theme })};
  ${({ size: sizeProp, square }) =>
    (sizeProp || square) && // make the button square
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      ${size(sizeProp || defaultProps.size)}// width and height
    `}
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
  ${Icon} {
    flex-shrink: 0;
  }
  &:disabled {
    cursor: default;
    outline: none;
    border: none;
    color: ${themeColor('tint', 'level4')};
    background-color: ${themeColor('tint', 'level3')};
    ${svgFill(themeColor('tint', 'level4'))};
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

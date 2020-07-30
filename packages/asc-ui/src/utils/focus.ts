import { css } from 'styled-components'
import { themeColor } from './themeUtils'

/**
 * Decorates an element with a focus outline.
 */
export const focusOutline = () => css`
  outline-color: ${themeColor('support', 'focus')};
  outline-style: solid;
  outline-width: 3px;
`

/**
 * Decorates an element with a focus outline when the element is focussed.
 */
export const outlineWhenFocused = () => css`
  &&:focus {
    ${focusOutline()}
  }
`

/**
 * Decorates an element with a background fill in the focus color.
 */
export const focusFill = () => css`
  background-color: ${themeColor('support', 'focus')};
`

/**
 * Decorates an element with a background fill in the focus color.
 */
export const fillWhenFocused = () => css`
  &&:focus {
    ${focusFill()}
  }
`

export type FocusStyle = 'outline' | 'fill' | 'none'

/**
 * Decorates an element with one of the existing focus styles:
 *
 * - `outline` draws an outline around the element on focus.
 * - `fill` fills the element background on focus.
 * - `none` no focus state at all.
 *
 * @param focusStyle The style of focus to use.
 */
// TODO: Remove this method some time in the future.
export const getFocusStyle = (focusStyle: FocusStyle = 'fill') => {
  switch (focusStyle) {
    case 'outline':
      return outlineWhenFocused()
    case 'fill':
      return fillWhenFocused()
    default:
      return ''
  }
}

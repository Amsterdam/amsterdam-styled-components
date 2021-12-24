import { getValueFromTheme } from './themeUtils'
import deprecatedWarning from './deprecatedWarning'

export {
  themeColor,
  getTypographyFromTheme,
  srOnlyStyle,
  breakpoint,
  svgFill,
  showHide,
  ShowHideTypes,
  showAboveBackDrop,
  customCss,
  CustomCssPropsType,
  CustomCssPropsInterface,
  getValueFromTheme,
  themeSpacing,
} from './themeUtils'
export { valueFromObject } from './valueFromObject'
export { fromProps } from './fromProps'

/**
 * @deprecated Use getValueFromTheme instead
 */
const fromTheme = getValueFromTheme

export { fromTheme, deprecatedWarning }

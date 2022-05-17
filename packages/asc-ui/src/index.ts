import Button, { ButtonProps } from './components/Button'
import Heading, { HeadingStyle } from './components/Heading'
import Icon, { IconStyle } from './components/Icon'
import Paragraph, { ParagraphStyle } from './components/Paragraph'
import Typography from './components/Typography'
import { ascDefaultTheme } from './theme'
import ThemeProvider from './theme/ThemeProvider'
import type { Theme } from './types'

import { perceivedLoading } from './utils/themeUtils'

export {
  useDebounce,
  useActionOnEscape,
  useClickOutside,
  useEdgeDetection,
  useFocus,
  useFocusWithArrows,
  useMatchMedia,
  useOptionalControlledState,
  useTrappedFocus,
} from './utils/hooks'

export {
  breakpoint,
  showAboveBackDrop,
  showHide,
  srOnlyStyle,
  svgFill,
  themeColor,
  themeSpacing,
} from './utils'
export { perceivedLoading }
// Components
export {
  Button,
  ButtonProps,
  Icon,
  Typography,
  Theme,
  ThemeProvider,
  Paragraph,
  Heading,
  ascDefaultTheme,
}

export const styles = {
  ParagraphStyle,
  IconStyle,
  HeadingStyle,
}

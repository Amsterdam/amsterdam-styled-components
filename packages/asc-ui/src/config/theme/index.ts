import { Theme } from '@amsterdam/asc-core'
import colors from './colors'
import globalStyle from './globalStyle'
import typography from './typography'

export default Theme.getTheme(
  colors,
  typography,
  globalStyle,
)

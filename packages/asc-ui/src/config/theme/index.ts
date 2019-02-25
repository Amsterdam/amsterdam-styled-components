import { Theme } from '@datapunt/asc-core'
import colors from './colors'
import globalStyle from './globalStyle'
import typography from './typography'

export default Theme.getTheme(
  colors,
  typography,
  globalStyle,
)

import styled, { css } from '@datapunt/asc-core'
import TypographyStyle from './TypographyStyle'
import { color } from '../../utils'
import { focusStyleText } from '../../utils/themeUtils'

export const LinkStyleCSS = css`
  color: ${color('primary')};
  display: inline-block;
  ${focusStyleText()}

  &:hover {
    color: ${color('secondary')};
  }
`

export default styled(TypographyStyle)`
  ${LinkStyleCSS}
`

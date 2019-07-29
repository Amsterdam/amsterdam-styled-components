import styled, { css } from '@datapunt/asc-core'
import { color } from '../../utils'
import { focusStyleText } from '../../utils/themeUtils'
import Typography from '../Typography'

export const LinkStyleCSS = css`
  color: ${color('primary')};
  display: inline-block;
  ${focusStyleText()}

  &:hover {
    color: ${color('secondary')};
  }
`

export default styled(Typography)`
  ${LinkStyleCSS}
`

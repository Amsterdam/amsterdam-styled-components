import styled, { css } from '@datapunt/asc-core'
import TopBarStyle from '../TopBar/TopBarStyle'
import { HEADER_MAX_WIDTH } from '../shared/sizes'

export type HeaderStyleProps = {
  fullWidth?: boolean
}

const HeaderStyle = styled(TopBarStyle)<HeaderStyleProps>`
  flex-wrap: nowrap;
  height: 100%;
  margin: 0 auto;
  padding: 0 10px;
  align-items: stretch;
  max-width: ${({ fullWidth }) =>
    !fullWidth ? `${HEADER_MAX_WIDTH}px` : 'none'};
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      padding-left: 10px !important;
    `}
`

export default HeaderStyle

import styled from '../../styled-components'
import { getBreakpointFromTheme, getColorFromTheme } from '../../utils'

export type Props = {}

const HeaderStyle = styled.div<Props>`
  display: flex;
  min-height: 50px;
  width: 100%;
  flex-flow: no-wrap;
  background-color: ${({ theme }) =>
    getColorFromTheme(theme, 'tint', 'level1')};
  border-bottom: 4px solid rgba(0, 0, 0, 0.04);

  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'max-width', 'laptop')} {
    position: fixed;
    top: 0;
  }
`

export default HeaderStyle

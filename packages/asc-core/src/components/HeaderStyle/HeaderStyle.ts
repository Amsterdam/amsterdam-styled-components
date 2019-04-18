import styled from '../../styled-components'
import { getColorFromTheme } from '../../utils'

export type Props = {}

const HeaderStyle = styled.div<Props>`
  display: flex;
  min-height: 50px;
  width: 100%;
  flex-flow: no-wrap;
  box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.4);
  background-color: ${({ theme }) =>
    getColorFromTheme(theme, 'tint', 'level1')};
  position: fixed;
  top: 0;
`

export default HeaderStyle

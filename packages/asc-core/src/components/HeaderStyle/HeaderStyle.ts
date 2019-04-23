import styled from '../../styled-components'
import { getColorFromTheme, getBreakpointFromTheme } from '../../utils'

export type Props = {
  headerSize?: 'tall' | 'short'
}

const HeaderStyle = styled.div<Props>`
  display: flex;
  min-height: 50px;
  width: 100%;
  flex-flow: no-wrap;
  box-shadow: 0 4px rgba(0, 0, 0, 0.04);
  background-color: ${({ theme }) =>
    getColorFromTheme(theme, 'tint', 'level1')};
  position: fixed;
  top: 0;

  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'min-width', 'laptop')} {
    display: ${({ headerSize }) => (headerSize === 'short' ? 'flex' : 'none')};
  }
`

HeaderStyle.defaultProps = {
  headerSize: 'short',
}

export default HeaderStyle

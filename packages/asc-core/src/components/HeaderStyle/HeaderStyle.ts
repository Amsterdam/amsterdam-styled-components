import styled from '../../styled-components'
import { getColorFromTheme } from '../../utils'
import { HeaderSize } from '.'

type Props = {
  headerSize?: HeaderSize
}

const HeaderStyle = styled.div<Props>`
  display: flex;
  min-height: 50px;
  width: 100%;
  margin: 0 auto;

  background-color: ${({ theme }) =>
    getColorFromTheme(theme, 'tint', 'level1')};

  max-width: ${({ headerSize }) =>
    headerSize === 'short-content' ? '1600px' : 'none'};
`

export default HeaderStyle

import styled from '../../styled-components'
import { getColorFromTheme } from '../../utils'
import { HeaderSize } from '.';

type Props = {
  headerSize?: HeaderSize
}

const HeaderWrapperBaseStyle = styled.div<Props>`
  background-color: ${({ theme }) =>
    getColorFromTheme(theme, 'tint', 'level1')};
  margin: 0 auto;
  max-width: 1800px;
`

HeaderWrapperBaseStyle.defaultProps = {
  headerSize: 'short',
}



export default HeaderWrapperBaseStyle

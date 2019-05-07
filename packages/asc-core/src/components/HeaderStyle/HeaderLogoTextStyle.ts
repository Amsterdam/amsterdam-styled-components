import styled from '../../styled-components'
import { getBreakpointFromTheme } from '../../utils'

type Props = {
  tabindex?: number
}

const HeaderShortTitleStyle = styled.h1<Props>`
  height: 50px;
  margin: 0;
  font-family: 'AvenirNextLTW01-Demi';
  font-weight: bold;
  display: flex;
  justify-content: normal;
  align-items: center;

  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'max-width', 'tablet')} {
    flex-grow: 1;
  }
`
export default HeaderShortTitleStyle

import styled from '../../styled-components'
import AmsterdamLogoStyle from '../AmsterdamLogo/AmsterdamLogoStyle'
import { breakpoint } from '../../utils'

type Props = {
  tabindex?: number
}

const HeaderLogoTextStyle = styled.h1<Props>`
  height: 50px;
  margin: 0;
  font-family: 'AvenirNextLTW01-Demi';
  font-weight: bold;
  display: flex;
  justify-content: normal;
  align-items: center;
  flex-shrink: 0;

  ${AmsterdamLogoStyle} {
    margin-right: 10px;
  }

  @media screen and ${breakpoint('min-width', 'laptopM')} {
    ${AmsterdamLogoStyle} {
      margin-right: 40px;
    }
  }
`
export default HeaderLogoTextStyle

import styled from '@datapunt/asc-core'
import AmsterdamLogoStyle from '../AmsterdamLogo/AmsterdamLogoStyle'
import { breakpoint } from '../../utils'

type Props = {
  tabindex?: number
}

const HeaderLogoTextStyle = styled.h1<Props>`
  height: 50px;
  margin: 0;
  font-weight: 700;
  display: flex;
  justify-content: normal;
  align-items: center;
  flex-shrink: 0;
  box-sizing: content-box;

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

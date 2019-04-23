import React from 'react'
import { ReactComponent as Logo } from '@datapunt/asc-assets/lib/Icons/Andreas.svg'
import HeaderLogoStyle, {
  HeaderLogoSetStyle,
  HeaderLogoTextStyle,
} from '../../styles/components/HeaderStyle/HeaderLogoStyle'

type Props = {
  homeLink?: string
}

const HeaderLogo: React.FC<Props> = ({ homeLink }) => (
  <HeaderLogoStyle href={homeLink}>
    <HeaderLogoSetStyle>
      <Logo />
    </HeaderLogoSetStyle>
    <HeaderLogoTextStyle>
      <span>Gemeente</span>
      <span>Amsterdam</span>
    </HeaderLogoTextStyle>
  </HeaderLogoStyle>
)

export default HeaderLogo

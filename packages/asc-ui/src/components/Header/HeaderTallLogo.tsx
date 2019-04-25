import React from 'react'
import { ReactComponent as LogoTall } from '@datapunt/asc-assets/lib/Icons/LogoTall.svg'
import HeaderTallLogoStyle from '../../styles/components/HeaderStyle/HeaderTallLogoStyle'

type Props = {
  homeLink?: string
}

const HeaderTallLogo: React.FC<Props> = ({ homeLink }) => (
  <HeaderTallLogoStyle href={homeLink}>
    <LogoTall />
  </HeaderTallLogoStyle>
)

export default HeaderTallLogo

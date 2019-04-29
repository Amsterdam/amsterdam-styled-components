import React from 'react'
import { ReactComponent as LogoTall } from '@datapunt/asc-assets/lib/Icons/LogoTall.svg'
import HeaderTallLogoStyle from '../../styles/components/HeaderStyle/HeaderTallLogoStyle'

const HeaderTallLogo: React.FC<{}> = () => (
  <HeaderTallLogoStyle>
    <LogoTall />
  </HeaderTallLogoStyle>
)

export default HeaderTallLogo

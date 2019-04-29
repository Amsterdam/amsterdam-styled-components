import React from 'react'
import { ReactComponent as LogoShort } from '@datapunt/asc-assets/lib/Icons/LogoShort.svg'
import HeaderShortLogoStyle from '../../styles/components/HeaderStyle/HeaderShortLogoStyle'

const HeaderShortLogo: React.FC<{}> = () => (
  <HeaderShortLogoStyle>
    <LogoShort />
  </HeaderShortLogoStyle>
)

export default HeaderShortLogo

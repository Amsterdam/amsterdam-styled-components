import React from 'react'
import { ReactComponent as LogoShort } from '@datapunt/asc-assets/lib/Icons/LogoShort.svg'
import HeaderShortLogoStyle from '../../styles/components/HeaderStyle/HeaderShortLogoStyle'

type Props = {
  homeLink?: string
}

const HeaderShortLogo: React.FC<Props> = ({ homeLink }) => (
  <HeaderShortLogoStyle href={homeLink}>
    <LogoShort />
  </HeaderShortLogoStyle>
)

export default HeaderShortLogo

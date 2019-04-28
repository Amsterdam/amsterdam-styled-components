require.extensions['.svg'] = () => {}
import React from 'react'
import { ReactComponent as LogoShort } from '@datapunt/asc-assets/lib/Icons/LogoShort.svg'
import HeaderLogoStyle from '../../styles/components/HeaderStyle/HeaderLogoStyle'

type Props = {
  homeLink?: string
}

const HeaderLogo: React.FC<Props> = ({ homeLink }) => (
  <HeaderLogoStyle href={homeLink}>
    {false ? '' : <LogoShort />}
  </HeaderLogoStyle>
)

export default HeaderLogo

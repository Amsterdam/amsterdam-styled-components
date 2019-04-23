import React from 'react'
import { ReactComponent as LogoTall } from '@datapunt/asc-assets/lib/Icons/LogoTall.svg'
import HeaderLogoStyle from '../../styles/components/HeaderStyle/HeaderLogoStyle'
import styled from '../../styled-components'

type Props = {
  homeLink?: string
}

const HeaderLogoStyleLocal = styled(HeaderLogoStyle)`
  display: inline-block;
  min-height: 108px;
  padding: 20px 20px 20px 15px;

  & > svg {
    height: 68px;
    width: 85px;
  }
`

const HeaderTallLogo: React.FC<Props> = ({ homeLink }) => (
  <HeaderLogoStyleLocal href={homeLink}>
    <LogoTall />
  </HeaderLogoStyleLocal>
)

export default HeaderTallLogo

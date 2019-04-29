import React from 'react'
import { ReactComponent as LogoTall } from '@datapunt/asc-assets/lib/Icons/LogoTall.svg'
// import HeaderTallLogoStyle from '../../styles/components/HeaderStyle/HeaderTallLogoStyle'

import styled from '../../styled-components'

const HeaderTallLogoStyle = styled.span`
  display: inline-block;
  padding: 20px 40px 10px 15px;

  & > svg {
    height: 68px;
    width: 100px;
  }
`

const HeaderTallLogo: React.FC<{}> = () => (
  <HeaderTallLogoStyle>
    <LogoTall />
  </HeaderTallLogoStyle>
)

export default HeaderTallLogo

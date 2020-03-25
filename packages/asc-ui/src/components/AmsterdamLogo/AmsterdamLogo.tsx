import React from 'react'
import AmsterdamLogoStyle, { LogoStyle } from './AmsterdamLogoStyle'
import { LogoProps } from '../Header/HeaderLogoText'

const AmsterdamLogo: React.FC<LogoProps> = ({ ...props }) => (
  <AmsterdamLogoStyle {...props}>
    <LogoStyle />
  </AmsterdamLogoStyle>
)

export default AmsterdamLogo

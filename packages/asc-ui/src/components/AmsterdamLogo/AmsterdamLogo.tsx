import React from 'react'
import AmsterdamLogoStyle, { LogoStyle } from './AmsterdamLogoStyle'
import { LogoProps } from '../Header/HeaderLogoText'

const AmsterdamLogo: React.FC<LogoProps> = ({ tall, href, ...otherProps }) => (
  <AmsterdamLogoStyle {...{ tall, href }} {...otherProps}>
    <LogoStyle />
  </AmsterdamLogoStyle>
)

export default AmsterdamLogo

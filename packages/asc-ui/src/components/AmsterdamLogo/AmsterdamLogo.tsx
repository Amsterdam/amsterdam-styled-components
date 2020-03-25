import React from 'react'
import AmsterdamLogoStyle, {
  LogoStyle,
  LogoTitleStyle,
} from './AmsterdamLogoStyle'
import { LogoProps } from '../Header/HeaderLogoText'

const AmsterdamLogo: React.FC<LogoProps> = ({ ...props }) => (
  <AmsterdamLogoStyle {...props}>
    <LogoStyle />
    <LogoTitleStyle srOnly>Gemeente Amsterdam</LogoTitleStyle>
  </AmsterdamLogoStyle>
)

export default AmsterdamLogo

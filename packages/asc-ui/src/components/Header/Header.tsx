import React from 'react'
import HeaderStyle, { Props as HeaderStyleProps } from './HeaderStyle'
import HeaderWrapperStyle, {
  Props as HeaderWrapperProps,
} from './HeaderWrapperStyle'
import HeaderLogoText, { LogoProps } from './HeaderLogoText'
import HeaderNavigation from './HeaderNavigation'
import HeaderLinks from './HeaderLinks'
import { CustomCssPropsType } from '../../utils'
import AmsterdamLogo from '../AmsterdamLogo'

type Props = {
  tall?: boolean
  homeLink: string
  title?: string
  navigation?: React.ReactNode
  links?: React.ReactNode
  logo?: React.FC<LogoProps>
} & HeaderWrapperProps &
  HeaderStyleProps &
  CustomCssPropsType &
  React.HTMLAttributes<HTMLDivElement>

const Header: React.FC<Props> = ({
  css,
  title,
  homeLink,
  fullWidth,
  tall,
  navigation,
  links,
  logo,
  ...otherProps
}) => (
  <HeaderWrapperStyle {...{ css, tall }} id="header">
    <HeaderStyle {...{ fullWidth, ...otherProps }}>
      <HeaderLogoText {...{ tall, title, homeLink, logo }} />
      <HeaderNavigation>{navigation}</HeaderNavigation>
      <HeaderLinks>{links}</HeaderLinks>
    </HeaderStyle>
  </HeaderWrapperStyle>
)

Header.defaultProps = {
  tall: false,
  fullWidth: true,
  logo: AmsterdamLogo,
}

export default Header

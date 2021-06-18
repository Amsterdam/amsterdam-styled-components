import {
  ElementType,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
} from 'react'
import { CustomCssPropsType } from '../../utils'
import AmsterdamLogo from '../AmsterdamLogo'
import HeaderLinks from './HeaderLinks'
import HeaderLogoText, { LogoProps } from './HeaderLogoText'
import HeaderNavigation from './HeaderNavigation'
import HeaderStyle, { Props as HeaderStyleProps } from './HeaderStyle'
import HeaderWrapperStyle, {
  Props as HeaderWrapperProps,
} from './HeaderWrapperStyle'

type HeaderProps = {
  tall?: boolean
  homeLink: string
  title?: string
  navigation?: ReactNode
  links?: ReactNode
  logo?: FunctionComponent<LogoProps>
  headerLogoTextAs?: ElementType
  ssr?: boolean
} & HeaderWrapperProps &
  HeaderStyleProps &
  CustomCssPropsType &
  HTMLAttributes<HTMLDivElement>

const Header: FunctionComponent<HeaderProps> = ({
  css,
  title,
  homeLink,
  fullWidth,
  tall,
  navigation,
  links,
  logo,
  headerLogoTextAs,
  ssr,
  ...otherProps
}) => (
  <HeaderWrapperStyle {...{ css, tall }} id="header">
    <HeaderStyle {...{ fullWidth, ...otherProps }}>
      <HeaderLogoText
        as={headerLogoTextAs}
        {...{ tall, title, homeLink, logo, ssr }}
      />
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

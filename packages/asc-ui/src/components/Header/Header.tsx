import type {
  ElementType,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
} from 'react'
import type { CustomCssPropsType } from '../../utils'
import AmsterdamLogo from '../AmsterdamLogo'
import HeaderLinks from './HeaderLinks'
import type { LogoProps } from './HeaderLogoText'
import HeaderLogoText from './HeaderLogoText'
import HeaderNavigation from './HeaderNavigation'
import type { Props as HeaderStyleProps } from './HeaderStyle'
import HeaderStyle from './HeaderStyle'
import type { Props as HeaderWrapperProps } from './HeaderWrapperStyle'
import HeaderWrapperStyle from './HeaderWrapperStyle'

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

function Header({
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
}: HeaderProps) {
  return (
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
}

Header.defaultProps = {
  tall: false,
  fullWidth: true,
  logo: AmsterdamLogo,
}

export default Header

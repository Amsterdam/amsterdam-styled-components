import React, {
  AnchorHTMLAttributes,
  ComponentType,
  FunctionComponent,
  HTMLAttributes,
} from 'react'
import HeaderLogoTextStyle from './HeaderLogoTextStyle'
import HeaderTitle from './HeaderTitle'

export interface LogoProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  tall?: boolean
  title?: string
}

interface HeaderLogoTextProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: string | ComponentType
  homeLink: string
  tall?: boolean
  logo?: FunctionComponent<LogoProps>
}

const HeaderLogoText: FunctionComponent<HeaderLogoTextProps> = ({
  as,
  title,
  homeLink,
  tall,
  logo: LogoIcon,
  ...otherProps
}) => (
  <HeaderLogoTextStyle as={as} {...otherProps}>
    {LogoIcon && <LogoIcon href={homeLink} title={title} tall={tall} />}
    {title && <HeaderTitle href={homeLink}>{title}</HeaderTitle>}
  </HeaderLogoTextStyle>
)

export default HeaderLogoText

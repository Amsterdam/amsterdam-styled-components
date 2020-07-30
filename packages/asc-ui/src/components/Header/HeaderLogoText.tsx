import React from 'react'
import HeaderLogoTextStyle from './HeaderLogoTextStyle'
import HeaderTitle from './HeaderTitle'

export interface LogoProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  tall?: boolean
  title?: string
}

interface HeaderLogoTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  homeLink: string
  tall?: boolean
  logo?: React.FC<LogoProps>
}

const HeaderLogoText: React.FC<HeaderLogoTextProps> = ({
  title,
  homeLink,
  tall,
  logo: LogoIcon,
  ...otherProps
}) => (
  <HeaderLogoTextStyle {...otherProps}>
    {LogoIcon && <LogoIcon href={homeLink} title={title} tall={tall} />}
    {title && <HeaderTitle href={homeLink}>{title}</HeaderTitle>}
  </HeaderLogoTextStyle>
)

export default HeaderLogoText

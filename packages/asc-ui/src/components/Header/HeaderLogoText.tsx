import React, {
  AnchorHTMLAttributes,
  FunctionComponent,
  HTMLAttributes,
} from 'react'
import { StyledProps } from 'styled-components'
import HeaderLogoTextStyle from './HeaderLogoTextStyle'
import HeaderTitle from './HeaderTitle'

export interface LogoProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  tall?: boolean
  title?: string
}

interface HeaderLogoTextProps extends HTMLAttributes<HTMLHeadingElement> {
  homeLink: string
  tall?: boolean
  logo?: FunctionComponent<LogoProps>
}

const HeaderLogoText: FunctionComponent<
  HeaderLogoTextProps & StyledProps<any>
> = ({ title, homeLink, tall, logo: LogoIcon, ...otherProps }) => (
  <HeaderLogoTextStyle {...otherProps}>
    {LogoIcon && <LogoIcon href={homeLink} title={title} tall={tall} />}
    {title && <HeaderTitle href={homeLink}>{title}</HeaderTitle>}
  </HeaderLogoTextStyle>
)

export default HeaderLogoText

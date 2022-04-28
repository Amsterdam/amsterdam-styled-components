import type {
  AnchorHTMLAttributes,
  ElementType,
  FunctionComponent,
  HTMLAttributes,
} from 'react'
import HeaderLogoTextStyle from './HeaderLogoTextStyle'
import HeaderTitle from './HeaderTitle'

export interface LogoProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  tall?: boolean
  title?: string
  ssr?: boolean
}

interface HeaderLogoTextProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: ElementType
  homeLink: string
  tall?: boolean
  logo?: FunctionComponent<LogoProps>
  ssr?: boolean
}

function HeaderLogoText({
  as,
  title,
  homeLink,
  tall,
  logo: LogoIcon,
  ssr,
  ...otherProps
}: HeaderLogoTextProps) {
  return (
    <HeaderLogoTextStyle as={as} {...otherProps}>
      {LogoIcon && (
        <LogoIcon href={homeLink} title={title} tall={tall} ssr={ssr} />
      )}
      {title && <HeaderTitle href={homeLink}>{title}</HeaderTitle>}
    </HeaderLogoTextStyle>
  )
}

export default HeaderLogoText

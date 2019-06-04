import * as React from 'react'
import HeaderStyle from './HeaderStyle'
import HeaderWrapperStyle, {
  Props as HeaderWrapperProps,
} from './HeaderWrapperStyle'
import HeaderLogoText from './HeaderLogoText'
import HeaderNavigation from './HeaderNavigation'
import HeaderContent from './HeaderContent'

type Props = {
  homeLink: string
  title?: string
  css?: any
  navigation?: React.ReactNode
} & HeaderWrapperProps

const Header: React.FC<Props> = ({
  css,
  title,
  homeLink,
  fullWidth,
  tall,
  children,
  navigation,
  ...otherProps
}) => (
  <HeaderWrapperStyle {...{ css, tall, fullWidth }} id="header">
    <HeaderStyle {...{ fullWidth, ...otherProps }}>
      <HeaderLogoText {...{ tall, title, homeLink }} />
      <HeaderContent>{children}</HeaderContent>
      <HeaderNavigation>{navigation}</HeaderNavigation>
    </HeaderStyle>
  </HeaderWrapperStyle>
)

Header.defaultProps = {
  tall: false,
  fullWidth: true,
}

export default Header

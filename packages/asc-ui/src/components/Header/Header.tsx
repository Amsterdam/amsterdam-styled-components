import * as React from 'react'
import HeaderStyle from './HeaderStyle'
import HeaderWrapperStyle, {
  Props as HeaderWrapperProps,
} from './HeaderWrapperStyle'
import HeaderLogoText from './HeaderLogoText'
import HeaderNavigation from './HeaderNavigation'

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
  navigation,
  ...otherProps
}) => (
  <HeaderWrapperStyle {...{ css, tall, fullWidth }} id="header">
    <HeaderStyle {...{ fullWidth, ...otherProps }}>
      <HeaderLogoText {...{ tall, title, homeLink }} />
      <HeaderNavigation>{navigation}</HeaderNavigation>
    </HeaderStyle>
  </HeaderWrapperStyle>
)

Header.defaultProps = {
  tall: false,
  fullWidth: true,
}

export default Header

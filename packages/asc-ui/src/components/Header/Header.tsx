import * as React from 'react'
import HeaderStyle from './HeaderStyle'
import HeaderWrapperStyle, {
  Props as HeaderWrapperProps,
} from './HeaderWrapperStyle'
import HeaderLogoText from './HeaderLogoText'
import HeaderContent from './HeaderContent'

type Props = {
  homeLink: string
  title?: string
} & HeaderWrapperProps

const Header: React.FC<Props> = ({
  title,
  homeLink,
  fullWidth,
  tall,
  children,
  ...otherProps
}) => (
  <HeaderWrapperStyle {...{ tall, fullWidth }}>
    <HeaderStyle {...{ fullWidth, ...otherProps }}>
      <HeaderLogoText {...{ tall, title, homeLink }} />
      <HeaderContent>{children}</HeaderContent>
    </HeaderStyle>
  </HeaderWrapperStyle>
)

Header.defaultProps = {
  tall: false,
  fullWidth: true,
}

export default Header

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
  styledComponent?: any
  navigation?: React.ReactNode
} & HeaderWrapperProps

const Header: React.FC<Props> = ({
  styledComponent,
  title,
  homeLink,
  fullWidth,
  tall,
  children,
  navigation,
  ...otherProps
}) => {
  const ExtendedHeaderWrapperStyle = styledComponent

  return (
    <ExtendedHeaderWrapperStyle {...{ tall, fullWidth }}>
      <HeaderStyle {...{ fullWidth, ...otherProps }}>
        <HeaderLogoText {...{ tall, title, homeLink }} />
        <HeaderContent>{children}</HeaderContent>
        <HeaderNavigation>{navigation}</HeaderNavigation>
      </HeaderStyle>
    </ExtendedHeaderWrapperStyle>
  )
}

Header.defaultProps = {
  tall: false,
  fullWidth: true,
  styledComponent: HeaderWrapperStyle,
}

export default Header

import * as React from 'react'
import HeaderStyle from './HeaderStyle'
import HeaderWrapperStyle, {
  Props as HeaderWrapperProps,
} from './HeaderWrapperStyle'
import HeaderLogoText from './HeaderLogoText'
import HeaderContent from './HeaderContent'
import SearchBarStyle from '../SearchBar/SearchBarStyle'
import MenuBarStyle from '../Menu/MenuBarStyle'

type Props = {
  homeLink: string
  title?: string
  styledComponent?: any
} & HeaderWrapperProps

const Header: React.FC<Props> = ({
  styledComponent,
  title,
  homeLink,
  fullWidth,
  tall,
  children,
  ...otherProps
}) => {
  const ExtendedHeaderWrapperStyle = styledComponent

  return (
    <ExtendedHeaderWrapperStyle {...{ tall, fullWidth }}>
      <HeaderStyle {...{ fullWidth, ...otherProps }}>
        <HeaderLogoText {...{ tall, title, homeLink }} />
        <HeaderContent>{children}</HeaderContent>
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
export { HeaderWrapperStyle, SearchBarStyle, MenuBarStyle }

import * as React from 'react'
import HeaderStyle from '../../styles/components/HeaderStyle/HeaderStyle'
import HeaderWrapperStyle, {
  Props as HeaderWrapperProps,
} from '../../styles/components/HeaderStyle/HeaderWrapperStyle'
import HeaderLogoText from './HeaderLogoText'

type Props = {
  title: string
  homeLink: string
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
      {children}
    </HeaderStyle>
  </HeaderWrapperStyle>
)

export default Header

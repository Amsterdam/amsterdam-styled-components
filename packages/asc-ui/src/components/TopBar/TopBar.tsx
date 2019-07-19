import React from 'react'
import TopBarStyle, { Props as TopBarStyleProps } from './TopBarStyle'

type Props = TopBarStyleProps

const TopBar: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({
  children,
  className,
  ...otherProps
}) => (
  <TopBarStyle className={className} {...otherProps}>
    {children}
  </TopBarStyle>
)

export default TopBar

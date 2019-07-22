import React, { ReactNode } from 'react'
import HeaderContentStyle from './HeaderContentStyle'

type Props = {
  children: ReactNode
} & React.HTMLAttributes<HTMLDivElement>

const HeaderContent: React.FC<Props> = ({ children, ...otherProps }) => (
  <HeaderContentStyle {...otherProps}>{children}</HeaderContentStyle>
)

export default HeaderContent

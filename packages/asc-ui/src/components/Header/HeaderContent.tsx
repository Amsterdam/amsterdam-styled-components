import React, { ReactNode } from 'react'
import HeaderContentStyle from './HeaderContentStyle'

type Props = {
  children: ReactNode
}

const HeaderLogoText: React.FC<Props> = ({ children }) => (
  <HeaderContentStyle>{children}</HeaderContentStyle>
)

export default HeaderLogoText

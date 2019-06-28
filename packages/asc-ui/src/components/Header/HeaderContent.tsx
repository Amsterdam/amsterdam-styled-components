import React, { ReactNode } from 'react'
import HeaderContentStyle from './HeaderContentStyle'

type Props = {
  children: ReactNode
}

const HeaderContent: React.FC<Props> = ({ children }) => (
  <HeaderContentStyle>{children}</HeaderContentStyle>
)

export default HeaderContent

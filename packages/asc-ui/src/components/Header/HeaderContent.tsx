import React from 'react'
import HeaderContentStyle from './HeaderContentStyle'

type Props = {
  children: any
}

const HeaderLogoText: React.FC<Props> = ({
  children
}) => (
  <HeaderContentStyle>
    {children}
  </HeaderContentStyle>
)

export default HeaderLogoText

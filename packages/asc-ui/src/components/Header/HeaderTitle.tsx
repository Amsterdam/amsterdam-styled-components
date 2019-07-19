import React from 'react'
import HeaderTitleStyle from './HeaderTitleStyle'

const HeaderTitle = ({ children }: any) => {
  return <HeaderTitleStyle as="a">{children}</HeaderTitleStyle>
}

export default HeaderTitle

import * as React from 'react'
import HeaderStyle, { HeaderSize } from '../../styles/components/HeaderStyle'
import HeaderShortWrapperStyle from '../../styles/components/HeaderStyle/HeaderShortWrapperStyle'
import HeaderTitle from './HeaderTitle'
import HeaderSearch from './HeaderSearch'
import HeaderMenu from './HeaderMenu'

type Props = {
  search: React.ReactElement
  menu: React.ReactElement
  title: string
  homeLink: string
  headerSize?: HeaderSize
}

const Header: React.FC<Props> = ({
  search,
  menu,
  title,
  homeLink,
  headerSize,
  ...otherProps
}) => (
  <HeaderShortWrapperStyle headerSize={headerSize}>
    <HeaderStyle {...otherProps}>
      <HeaderTitle title={title} homeLink={homeLink} />
      <HeaderSearch>{search}</HeaderSearch>
      <HeaderMenu>{menu}</HeaderMenu>
    </HeaderStyle>
  </HeaderShortWrapperStyle>
)

export default Header

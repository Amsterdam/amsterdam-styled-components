import * as React from 'react'
import HeaderShortStyle from '../../styles/components/HeaderStyle/HeaderShortStyle'
import HeaderShortWrapperStyle from '../../styles/components/HeaderStyle/HeaderShortWrapperStyle'
import HeaderShortTitle from './HeaderShortTitle'
import HeaderSearch from './HeaderSearch'
import HeaderMenu from './HeaderMenu'
import { HeaderSize } from '../../styles/components/HeaderStyle';

type Props = {
  search: React.ReactElement
  menu: React.ReactElement
  title: string
  homeLink: string
  headerSize?: HeaderSize
}

const HeaderShort: React.FC<Props> = ({
  search,
  menu,
  title,
  homeLink,
  headerSize,
  ...otherProps
}) => (
  <HeaderShortWrapperStyle headerSize={headerSize}>
    <HeaderShortStyle headerSize={headerSize} {...otherProps}>
      <HeaderShortTitle title={title} homeLink={homeLink} />
      <HeaderSearch>{search}</HeaderSearch>
      <HeaderMenu>{menu}</HeaderMenu>
    </HeaderShortStyle>
  </HeaderShortWrapperStyle>
)

export default HeaderShort

import * as React from 'react'
import HeaderStyle, {
  HeaderStyleProps,
} from '../../styles/components/HeaderStyle'
import HeaderTitle from './HeaderTitle'
import HeaderSearch from './HeaderSearch'
import HeaderMenu from './HeaderMenu'

type Props = HeaderStyleProps & {
  homeLink: string
  search: React.ReactElement
  menu: React.ReactElement
}

const Header: React.FC<Props> = ({ search, menu, homeLink, ...otherProps }) => (
  <HeaderStyle {...otherProps}>
    <HeaderTitle title="Data en informatie" homeLink={homeLink} />
    <HeaderSearch>{search}</HeaderSearch>
    <HeaderMenu>{menu}</HeaderMenu>
  </HeaderStyle>
)

export default Header

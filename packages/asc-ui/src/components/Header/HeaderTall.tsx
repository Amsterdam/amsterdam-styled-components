import * as React from 'react'
import { HeaderStyleProps } from '../../styles/components/HeaderStyle'
import HeaderTallWrapperStyle from '../../styles/components/HeaderStyle/HeaderTallWrapperStyle'
import HeaderTallStyle from '../../styles/components/HeaderStyle/HeaderTallStyle'
import HeaderSearch from './HeaderSearch'
import HeaderMenu from './HeaderMenu'
import HeaderTallTitle from './HeaderTallTitle'

type Props = HeaderStyleProps & {
  title: string
  homeLink: string
  search: React.ReactElement
  menu: React.ReactElement
}

const HeaderTall: React.FC<Props> = ({
  search,
  menu,
  title,
  homeLink,
  ...otherProps
}) => (
  <HeaderTallWrapperStyle>
    <HeaderTallStyle {...otherProps}>
      <HeaderTallTitle title={title} homeLink={homeLink} />
      <HeaderSearch>{search}</HeaderSearch>
      <HeaderMenu>{menu}</HeaderMenu>
    </HeaderTallStyle>
  </HeaderTallWrapperStyle>
)

export default HeaderTall

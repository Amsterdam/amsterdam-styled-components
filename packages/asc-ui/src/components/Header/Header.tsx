import * as React from 'react'
import HeaderStyle, {
  HeaderStyleProps,
} from '../../styles/components/HeaderStyle'
import {
  HeaderGridWrapper,
  HeaderGridContainer,
  HeaderGridZone,
} from '../../styles/components/HeaderStyle/HeaderStyle'
import HeaderTitle from './HeaderTitle'
import HeaderNav from './HeaderNav'
import HeaderSearch from './HeaderSearch'
import HeaderMenu from './HeaderMenu'

type Props = HeaderStyleProps

const Header: React.FC<Props> = ({ children, ...otherProps }) => (
  <HeaderGridWrapper>
    <HeaderGridContainer>
      <HeaderGridZone>
        <HeaderStyle {...otherProps}>
          <HeaderTitle />
          <HeaderNav>
            <HeaderSearch />
            <HeaderMenu />
          </HeaderNav>
          {children}
        </HeaderStyle>
      </HeaderGridZone>
    </HeaderGridContainer>
  </HeaderGridWrapper>
)

export default Header

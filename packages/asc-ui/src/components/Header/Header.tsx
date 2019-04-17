import * as React from 'react'
import styled from '../../styled-components'
import HeaderStyle, {
  HeaderStyleProps,
} from '../../styles/components/HeaderStyle'
import {
  HeaderGridWrapper,
  HeaderGridContainer,
} from '../../styles/components/HeaderStyle/HeaderStyle'
import HeaderTitle from './HeaderTitle'
import HeaderSearch from './HeaderSearch'
import HeaderMenu from './HeaderMenu'

type Props = HeaderStyleProps

const HeaderStyleLocal = styled(HeaderStyle)`
  background-color: lightgrey;
  width: 100%;
  flex-flow: no-wrap;

  @media screen and (max-width: 1023px) {
    position: fixed;
    top: 0;
  }
`

const Header: React.FC<Props> = ({ ...otherProps }) => (
  <HeaderGridWrapper>
    <HeaderGridContainer>
      <HeaderStyleLocal {...otherProps}>
        <HeaderTitle title="Data en informatie" />
        <HeaderSearch />
        <HeaderMenu />
      </HeaderStyleLocal>
    </HeaderGridContainer>
  </HeaderGridWrapper>
)

export default Header

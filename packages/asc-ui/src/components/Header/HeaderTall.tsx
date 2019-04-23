import * as React from 'react'
import { getBreakpointFromTheme, getColorFromTheme } from '../../styles/utils'
import { HeaderStyleProps } from '../../styles/components/HeaderStyle'
import HeaderSearch from './HeaderSearch'
import HeaderMenu from './HeaderMenu'
import HeaderTallTitle from './HeaderTallTitle'
import styled from '../../styled-components'

type Props = HeaderStyleProps & {
  title: string
  homeLink: string
  search: React.ReactElement
  menu: React.ReactElement
}

const HeaderTallStyleWrapper = styled.div`
  background-color: ${({ theme }) =>
    getColorFromTheme(theme, 'tint', 'level1')};
  margin: 0 auto;
  max-width: 1800px;
  height: 108px;
  border-bottom: 50px solid
    ${({ theme }) => getColorFromTheme(theme, 'tint', 'level2')};

  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'max-width', 'laptop')} {
    display: none;
  }
`

const HeaderTallStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 158px;
  background-color: ${({ theme }) =>
    getColorFromTheme(theme, 'tint', 'level1')};
  margin: 0 auto;
  max-width: 1600px;

  & > :first-child {
    height: 108px;
    width: 100%;
  }

  & > :nth-child(2) {
    height: 50px;
    flex-grow: 1;
    background-color: ${({ theme }) =>
      getColorFromTheme(theme, 'tint', 'level2')};
  }

  & > :nth-child(3) {
    height: 50px;
    min-width: 100px;
    background-color: ${({ theme }) =>
      getColorFromTheme(theme, 'tint', 'level2')};
  }
`

const HeaderTall: React.FC<Props> = ({
  search,
  menu,
  title,
  homeLink,
  ...otherProps
}) => (
  <HeaderTallStyleWrapper>
    <HeaderTallStyle {...otherProps}>
      <HeaderTallTitle title={title} homeLink={homeLink} />
      <HeaderSearch>{search}</HeaderSearch>
      <HeaderMenu>{menu}</HeaderMenu>
    </HeaderTallStyle>
  </HeaderTallStyleWrapper>
)

export default HeaderTall

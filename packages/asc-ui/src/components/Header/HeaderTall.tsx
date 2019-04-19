import * as React from 'react'
import { HeaderStyleProps } from '../../styles/components/HeaderStyle'
// import HeaderSearch from './HeaderSearch'
// import HeaderMenu from './HeaderMenu'
// import HeaderTallTitle from './HeaderTallTitle'
import styled from '../../styled-components'

type Props = HeaderStyleProps & {
  title: string
  homeLink: string
  search: React.ReactElement
  menu: React.ReactElement
}

const HeaderTallStyleWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  background-color: #aaa;
  /* margin: 0 auto; */
  /* max-width: 1600px; */
  height: 100%;
  align-content: stretch;
`
const HeaderFiller = styled.div`
  background-color: blue;
  height: 158px;

  /* flex-grow: 1; */
`

const HeaderTallStyle = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  min-height: 158px;
  /* flex-grow: 1; */
  background-color: #ccc;
  /* margin: 0 auto; */
  max-width: 1200px;

  /* & > :first-child {
    height: 108px;
    width: 100%;
    background-color: red;
  }

  & > :nth-child(2) {
    height: 50px;
    flex-grow: 1;
    background-color: yellow;
  }

  & > :nth-child(3) {
    height: 50px;
    min-width: 100px;
    background-color: green;
  } */
`

const HeaderTall: React.FC<Props> = ({
  search,
  menu,
  title,
  homeLink,
  ...otherProps
}) => (
  <HeaderTallStyleWrapper>
    <HeaderFiller>A</HeaderFiller>
    <HeaderTallStyle {...otherProps}>
      B
      {/* <HeaderTallTitle title={title} homeLink={homeLink} />
      <HeaderSearch>{search}</HeaderSearch>
      <HeaderMenu>{menu}</HeaderMenu> */}
    </HeaderTallStyle>
    <HeaderFiller>C </HeaderFiller>
  </HeaderTallStyleWrapper>
)

export default HeaderTall

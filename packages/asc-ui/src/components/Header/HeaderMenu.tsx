import React from 'react'
import styled from '../../styled-components'

type Props = {}

const HeaderMenuStyle = styled.div`
  background-color: cyan;

  @media screen and (max-width: 1023px) {
    width: 50px;
  }

  @media screen and (min-width: 1024px) {
    /* flex-grow: 1; */
  }
`

const HeaderMenu: React.FC<Props> = ({ ...otherProps }) => (
  <HeaderMenuStyle {...otherProps}>M</HeaderMenuStyle>
)

export default HeaderMenu

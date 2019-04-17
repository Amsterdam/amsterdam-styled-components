import React from 'react'
import styled from '../../styled-components'

type Props = {}

const HeaderSearchStyle = styled.div`
  background-color: blue;
  overflow: hidden;

  @media screen and (max-width: 540px) {
    width: 50px;
  }

  @media screen and (min-width: 541px) {
    flex-grow: 1;
  }
`

const HeaderSearch: React.FC<Props> = ({ children, ...otherProps }) => (
  <HeaderSearchStyle {...otherProps}>S{children}</HeaderSearchStyle>
)

export default HeaderSearch

import * as React from 'react'
import { getBreakpointFromTheme } from '../../styles/utils'
import styled from '../../styled-components'

type Props = {}

const HeaderMenuStyle = styled.div`
  background-color: rgba(211, 128, 144, 0.1);

  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'max-width', 'laptop')} {
    width: 50px;
  }
`

const HeaderMenu: React.FC<Props> = ({ children, ...otherProps }) => (
  <HeaderMenuStyle {...otherProps}>{children}</HeaderMenuStyle>
)

export default HeaderMenu

import React from 'react'
import styled from '../../styled-components'
import { getBreakpointFromTheme } from '../../styles/utils'
import CenteredElement from '../../internals/CenteredElement/CenteredElement'

type Props = {}

const HeaderSearchStyle = styled.div`
  background-color: rgba(128, 128, 128, 0.1);
  overflow: hidden;

  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'max-width', 'tablet')} {
    width: 50px;
  }

  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'min-width', 'tablet')} {
    flex-grow: 1;
  }
`

const HeaderSearch: React.FC<Props> = ({ children, ...otherProps }) => (
  <HeaderSearchStyle {...otherProps}>
    <CenteredElement> S </CenteredElement>
    {children}
  </HeaderSearchStyle>
)

export default HeaderSearch

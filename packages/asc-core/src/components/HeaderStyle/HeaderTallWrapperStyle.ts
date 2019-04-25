import styled from '../../styled-components'
import { getColorFromTheme, getBreakpointFromTheme } from '../../utils'

const HeaderTallWrapperStyle = styled.div`
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

export default HeaderTallWrapperStyle

import styled from 'styled-components'
import { themeSpacing, themeColor, breakpoint } from '../../utils/themeUtils'

export default styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: ${themeSpacing(4)} 0;

  li:first-child span {
    display: none;
  }

  svg {
    fill: ${themeColor('tint', 'level5')};
  }

  @media ${breakpoint('min-width', 'laptopM')} {
    margin: ${themeSpacing(5)} 0;
  }
`

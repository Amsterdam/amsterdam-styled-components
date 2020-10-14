import styled from 'styled-components'
import { themeSpacing, themeColor } from '../../utils/themeUtils'

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
`

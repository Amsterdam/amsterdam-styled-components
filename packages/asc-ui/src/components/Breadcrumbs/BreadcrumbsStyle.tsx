import styled from 'styled-components'
import { themeColor } from '../../utils/themeUtils'

export default styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;

  li:first-child span {
    display: none;
  }

  svg {
    fill: ${themeColor('tint', 'level5')};
  }
`

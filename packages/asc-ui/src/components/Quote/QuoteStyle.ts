import styled from 'styled-components'
import { themeColor, themeSpacing } from '../../utils'

export default styled.blockquote`
  padding: ${themeSpacing(8, 0)};
  margin: 0;
  line-height: 24px;
  color: ${themeColor('tint', 'level6')};
`

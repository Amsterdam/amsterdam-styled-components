import styled from 'styled-components'
import { themeColor, themeSpacing } from '../../../utils'

export default styled.div`
  padding: ${themeSpacing(8, 0)};
  margin: 0;
  display: flex;
  line-height: 24px;
  color: ${themeColor('tint', 'level6')};
`

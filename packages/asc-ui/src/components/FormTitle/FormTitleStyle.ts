import styled from 'styled-components'
import { themeColor, themeSpacing } from '../../utils/themeUtils'

export default styled.h1`
  max-width: 620px;
  margin: ${themeSpacing(6, 0, 8)};
  padding-bottom: ${themeSpacing(1)};
  border-bottom: 1px solid ${themeColor('tint', 'level5')};
  color: ${themeColor('tint', 'level5')};
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
`

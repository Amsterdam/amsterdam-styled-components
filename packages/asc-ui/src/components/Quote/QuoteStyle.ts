import styled from 'styled-components'
import { themeColor, themeSpacing } from '../../utils'
import IconComponent from '../Icon'

export default styled.blockquote`
  padding: ${themeSpacing(8, 0)};
  margin: 0;
  display: flex;
  line-height: 24px;
  color: ${themeColor('tint', 'level6')};
`

export const Icon = styled(IconComponent)`
  align-self: flex-start;
  fill: ${themeColor('secondary')};
  padding-right: 20px;
`

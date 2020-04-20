import styled from 'styled-components'
import { themeColor, themeSpacing } from '../../utils'

const ErrorMessageStyle = styled.div`
  color: ${themeColor('error', 'main')};
  font-weight: 700;
  line-height: 22px;
  margin-top: ${themeSpacing(4)};
`

export default ErrorMessageStyle

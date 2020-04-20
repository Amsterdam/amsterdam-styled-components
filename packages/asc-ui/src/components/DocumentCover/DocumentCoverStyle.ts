import styled from 'styled-components'
import { themeColor, themeSpacing } from '../../utils'

const DocumentCoverStyle = styled.div<{}>`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: ${themeSpacing(5)};
  background-color: ${themeColor('tint', 'level2')};
`

export default DocumentCoverStyle

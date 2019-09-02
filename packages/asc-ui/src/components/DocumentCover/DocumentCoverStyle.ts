import styled from '@datapunt/asc-core'
import { themeColor } from '../../utils'

const DocumentCoverStyle = styled.div<{}>`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
  background-color: ${themeColor('tint', 'level2')};
`

export default DocumentCoverStyle

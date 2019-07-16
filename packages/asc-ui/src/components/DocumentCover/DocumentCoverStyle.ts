import styled from '@datapunt/asc-core'
import { getColorFromTheme } from '../../utils'

const DocumentCoverStyle = styled.div<{}>`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
  background-color: ${({ theme }) =>
    getColorFromTheme(theme, 'tint', 'level2')};
`

export default DocumentCoverStyle

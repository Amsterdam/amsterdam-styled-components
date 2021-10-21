import styled from 'styled-components'
import TableCell from './TableCell'
import { themeColor } from '../../utils'

const TableHeader = styled.thead`
  ${TableCell} {
    border-bottom: 1px solid ${themeColor('tint', 'level3')};
  }
`

export default TableHeader

import styled from 'styled-components'
import { themeColor } from '../../utils'
import TableCell from './TableCell'

const TableRow = styled.tr`
  &:not(:last-child) ${TableCell} {
    border-bottom: 1px solid ${themeColor('tint', 'level3')};
  }
`

export default TableRow

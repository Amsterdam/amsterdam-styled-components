import styled from 'styled-components'
import { themeColor } from '../../utils'
import TableCell from './TableCell'

const TableFooter = styled.tfoot`
  ${TableCell} {
    border-top: 2px solid ${themeColor('tint', 'level4')};
  }
`

export default TableFooter

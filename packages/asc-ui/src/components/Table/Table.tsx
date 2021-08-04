import styled from 'styled-components'
import { themeColor, themeSpacing } from '../../utils'
import TableCell from './TableCell'

const Table = styled.table`
  display: inline-block;
  border-spacing: 0;
  overflow: auto;
  padding-right: ${themeSpacing(3)};

  th {
    font-weight: 700;
  }

  & > *:first-child > *:first-child ${TableCell} {
    border-top: 2px solid ${themeColor('tint', 'level4')};
  }
`

export default Table

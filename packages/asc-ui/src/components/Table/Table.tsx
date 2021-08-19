import styled from 'styled-components'
import { themeSpacing } from '../../utils'

const Table = styled.table`
  display: table;
  width: 100%;
  border-spacing: 0;
  overflow: auto;
  padding-right: ${themeSpacing(3)};

  th {
    font-weight: 700;
  }
`

export default Table

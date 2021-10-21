import styled from 'styled-components'
import { themeSpacing } from '../../utils'

const TableContainer = styled.div`
  overflow-x: auto;
  mask: linear-gradient(
      to right,
      black calc(100% - ${themeSpacing(7)}),
      transparent
    ),
    linear-gradient(
      to bottom,
      transparent calc(100% - ${themeSpacing(3)}),
      black calc(100% - ${themeSpacing(3)})
    );
`

export default TableContainer

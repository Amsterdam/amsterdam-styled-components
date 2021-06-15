import styled from 'styled-components'
import { themeColor, themeSpacing } from '../../utils'

const TableResizer = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${themeSpacing(-2)}; /* This is to center the resizer */
  width: ${themeSpacing(4)};
  z-index: 1;
  touch-action: none; /* prevents from scrolling while dragging on touch devices */
  &:before {
    content: '';
    background: ${themeColor('tint', 'level7')};
    width: 1px;
    height: 100%;
    position: absolute;
    transform: translateX(
      -1px
    ); /* This is to align the resizer with the cell borders */
  }
`

export default TableResizer

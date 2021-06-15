import styled, { css } from 'styled-components'
import { themeColor, themeSpacing } from '../../utils'

export type Props = {
  isSticky?: boolean
}

const TableCell = styled.td<Props>`
  margin: 0;
  padding: ${themeSpacing(2)};
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  position: relative;

  ${({ isSticky }) =>
    isSticky &&
    css`
      background-color: ${themeColor('tint', 'level1')};
      position: sticky !important;
      left: 0;
      z-index: 1;
    `}
`

export default TableCell

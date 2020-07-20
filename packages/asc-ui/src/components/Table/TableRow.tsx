import styled, { css } from 'styled-components'
import { themeColor } from '../../utils'

type Props = {
  isSelected?: boolean
  isSticky?: boolean
}

const TableRow = styled.tr<Props>`
  :last-child {
    td {
      border-bottom: 0;
    }
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${themeColor('tint', 'level2')};
    `}

  ${({ isSticky }) =>
    isSticky &&
    css`
      background-color: ${themeColor('tint', 'level1')};
      position: sticky;
      top: 0;
      z-index: 2;
    `}
`

export default TableRow

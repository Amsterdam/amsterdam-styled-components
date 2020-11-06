import { ChevronSorting } from '@amsterdam/asc-assets'
import { FunctionComponent, MouseEvent } from 'react'
import styled, { css } from 'styled-components'
import { themeColor, themeSpacing } from '../../utils'
import Button from '../Button'
import Icon from '../Icon'
import TableCell, { Props as TableCellProps } from './TableCell'

type ButtonProps = {
  sorted?: 'none' | 'asc' | 'desc'
}

type Props = {
  onClick?: (e: MouseEvent) => void
  title: string
} & ButtonProps &
  TableCellProps

const TableHeaderCellStyle = styled(TableCell)<TableCellProps>`
  padding: 0;
  border-bottom: 2px solid ${themeColor('tint', 'level7')};
  border-right: none;

  ${({ isSticky }) =>
    isSticky &&
    css`
      border-right: 1px solid;
      z-index: 3;
    `}
`

const CellContent = styled.div`
  height: 40px;
  border: none;
  font-weight: 700;
  width: 100%;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const CellButton = styled(Button)<ButtonProps>`
  cursor: pointer;
  padding: ${themeSpacing(1)};
  svg path {
    fill: ${themeColor('tint', 'level4')};
  }
  ${Icon} {
    margin-left: auto;
  }
  ${({ sorted }) => {
    switch (sorted) {
      case 'asc':
        return css`
          svg path.chevron-up {
            fill: ${themeColor('primary')};
          }
        `
      case 'desc':
        return css`
          svg path.chevron-down {
            fill: ${themeColor('primary')};
          }
        `
      case 'none':
      default:
        return null
    }
  }}
`

const TableHeaderCell: FunctionComponent<Props> = ({
  onClick,
  children,
  title,
  sorted = 'none',
  ...otherProps
}) => (
  <TableHeaderCellStyle {...otherProps} as="th">
    <CellContent
      {...(onClick
        ? {
            onClick,
            as: CellButton,
            variant: 'blank',
            type: 'button',
            title,
            iconRight: <ChevronSorting />,
            sorted,
          }
        : {})}
    >
      <span>{title}</span>
    </CellContent>
    {children}
  </TableHeaderCellStyle>
)

export default TableHeaderCell

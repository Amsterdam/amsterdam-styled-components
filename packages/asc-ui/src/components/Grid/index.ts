import ColumnStyle from './ColumnStyle'
import RowStyle from './RowStyle'

export { default as GridContainer } from './GridContainerStyle'
export { default as GridItem } from './GridItemStyle'
export { default as Column } from './Column'
export { default as Container } from './Container'
export { default as Row } from './Row'
export type TypeFlexPosition =
  | 'auto'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch'

export const GridStyles = {
  RowStyle,
  ColumnStyle,
}

import styled from 'styled-components'
import { themeColor } from '../../utils'
import { Position } from './types'

export type ContextMenuListProps = {
  labelId?: string
  position?: Position
}

const ContextMenuListStyle = styled.ul<ContextMenuListProps>`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  &:focus {
    outline: none;
  }
`
export default ContextMenuListStyle

export const ContextMenuListWrapperStyle = styled.div<ContextMenuListProps>`
  order: ${({ position }) => (position === 'bottom' ? -1 : 0)};
  background-color: ${themeColor('tint', 'level1')};
  border: 1px solid ${themeColor('tint', 'level7')};
  max-width: 250px;
  width: 100%;

  &:focus {
    outline: none;
  }
`

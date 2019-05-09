import styled from '../../styled-components'
import { color } from '../../utils'
import { ContextMenuListProps } from './types'

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

export const ContextMenuListWrapperStyle = styled.div.attrs(() => ({
  role: 'menu',
  tabIndex: -1,
}))<ContextMenuListProps>`
  order: ${({ position }) => (position === 'bottom' ? -1 : 0)};
  background-color: ${color('tint', 'level1')};
  border: 1px solid ${color('tint', 'level7')};
  max-width: 250px;
  width: 100%;

  &:focus {
    outline: none;
  }
`

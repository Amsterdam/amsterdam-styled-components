import styled from '../../styled-components'
import { ContextMenu } from './types'
import { getColor } from '../../utils/themeUtils'

const ContextMenuList = styled.ul<ContextMenu.ContextMenuListProps>`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  &:focus {
    outline: none;
  }
`
export default ContextMenuList

export const ContextMenuListWrapper = styled.div.attrs(() => ({
  role: 'document',
  tabIndex: -1,
}))<ContextMenu.ContextMenuListProps>`
  order: ${({ orientation }) => (orientation === 'top' ? -1 : 0)};
  border: 1px solid ${({ theme }) => getColor(theme, 'tint', 'level7')};
  max-width: 250px;
  width: 100%;
  &:focus {
    outline: none;
  }
`

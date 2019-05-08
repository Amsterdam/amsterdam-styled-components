import styled from '../../styled-components'
import { ContextMenu } from './types'
import { color, fromTheme } from '../../utils'

export const ContextMenuItem = styled.li<ContextMenu.ContextMenuItemProps>`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 34px;
  width: 100%;
  cursor: pointer;
  font-size: ${fromTheme('typography.fontSize')};

  & > span:first-child {
    margin: 5px 6px;
  }

  ${({ divider }) =>
    divider &&
    `border-bottom: 1px solid ${color('tint', 'level4')}}`}

  &:hover,
  &:focus {
    outline: none;
    background-color: ${color('tint', 'level2')}};
  }
`

export default ContextMenuItem

import styled, { css } from '@datapunt/asc-core'
import { ContextMenuItemProps } from './types'
import { color, fromTheme } from '../../utils'

export const ContextMenuItemStyle = styled.li<ContextMenuItemProps>`
  padding: 0 15px 0 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 34px;
  width: 100%;
  cursor: pointer;
  font-size: ${fromTheme('typography.fontSize')};
  text-decoration: none;
  color: ${color('tint', 'level7')};

  & > span:first-child {
    margin: 5px 6px;
  }

  ${({ divider }) =>
    divider &&
    css`
      border-bottom: 1px solid ${color('tint', 'level4')};
    `}

  &:hover,
  &:focus {
    outline: none;
    background-color: ${color('tint', 'level2')};
  }
`

export default ContextMenuItemStyle

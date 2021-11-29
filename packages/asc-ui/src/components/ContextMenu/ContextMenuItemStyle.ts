import styled, { css } from 'styled-components'
import { themeColor, getValueFromTheme, themeSpacing } from '../../utils'

export interface ContextMenuItemProps {
  divider?: boolean
}

export const ContextMenuItemStyle = styled.li<ContextMenuItemProps>`
  white-space: nowrap;
  ${({ divider }) =>
    divider &&
    css`
      border-bottom: 1px solid ${themeColor('tint', 'level4')};
    `}
`

export const ContextMenuItemButton = styled.button`
  cursor: pointer;
  padding: ${themeSpacing(0, 3)};
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 34px;
  width: 100%;
  font-size: ${getValueFromTheme('typography.fontSize')};
  text-decoration: none;
  color: ${themeColor('tint', 'level7')};
  background-color: ${themeColor('tint', 'level1')};
  border: 0;

  & > span:first-of-type {
    margin: ${themeSpacing(1, 1, 1, -2)};
  }

  &:hover,
  &:focus {
    z-index: 1;
    background-color: ${themeColor('tint', 'level2')};
  }
`

export default ContextMenuItemStyle

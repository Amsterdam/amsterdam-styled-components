import styled, { css } from 'styled-components'
import { themeColor, getValueFromTheme, themeSpacing } from '../../utils'

export type ContextMenuItemProps = {
  divider?: boolean
}

export const ContextMenuItemStyle = styled.li<ContextMenuItemProps>`
  ${({ divider }) =>
    divider &&
    css`
      border-bottom: 1px solid ${themeColor('tint', 'level4')};
    `}
`

export const ContextMenuItemButton = styled.button`
  padding: ${themeSpacing(0, 3, 0, 1)};
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
    margin: 5px 6px;
  }

  &:hover,
  &:focus {
    outline: none;
    background-color: ${themeColor('tint', 'level2')};
  }
`

export default ContextMenuItemStyle

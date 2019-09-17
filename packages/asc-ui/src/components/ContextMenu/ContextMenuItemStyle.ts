import styled, { css } from '@datapunt/asc-core'
import { themeColor, getValueFromTheme } from '../../utils'

export type ContextMenuItemProps = {
  role?: string
  id: string
  label: string
  focused: boolean
  divider?: boolean
}

export const ContextMenuItemStyle = styled.li<ContextMenuItemProps>`
  padding: 0 15px 0 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 34px;
  width: 100%;
  cursor: pointer;
  font-size: ${getValueFromTheme('typography.fontSize')};
  text-decoration: none;
  color: ${themeColor('tint', 'level7')};

  & > span:first-of-type {
    margin: 5px 6px;
  }

  ${({ divider }) =>
    divider &&
    css`
      border-bottom: 1px solid ${themeColor('tint', 'level4')};
    `}

  &:hover,
  &:focus {
    outline: none;
    background-color: ${themeColor('tint', 'level2')};
  }
`

export default ContextMenuItemStyle

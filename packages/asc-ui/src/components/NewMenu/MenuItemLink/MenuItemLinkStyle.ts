import styled, { css } from '@datapunt/asc-core'
import { color } from '../../../utils'
import {
  MenuItemSharedStyle,
  activeStyle as menuItemActiveStyle,
} from '../MenuItem'
import { MENU_ITEM_SIZE } from '../constants'

export type Props = {
  isActive?: boolean
  hasToggle?: boolean
  underFlyOutMenu?: boolean
  hasCustomIcon?: boolean
}

const activeStyle = css`
  ${menuItemActiveStyle};
  background-color: ${color('tint', 'level2')};
`

const activeToggleStyle = css`
  ${activeStyle};
  border-left-color: ${color('secondary')};
`

const toggleStyle = css`
  border-left-color: ${color('tint', 'level2')};
`

const noToggleAndFlyOutStyle = css`
  &:hover,
  &:focus {
    ${activeStyle}
  }
`

export default styled.a.attrs<Props>({
  ...({ underFlyOutMenu }: Props) => (!underFlyOutMenu ? { tabIndex: 0 } : {}),
})<Props>`
  ${MenuItemSharedStyle};
  min-height: ${MENU_ITEM_SIZE}px;
  ${({ hasCustomIcon }) =>
    hasCustomIcon &&
    css`
      justify-content: space-between;
    `}
  ${({ isActive }) => isActive && activeStyle}
  ${({ hasToggle }) => hasToggle && toggleStyle}
  ${({ hasToggle, underFlyOutMenu }) =>
    !hasToggle && underFlyOutMenu && noToggleAndFlyOutStyle}
  ${({ isActive, hasToggle }) => hasToggle && isActive && activeToggleStyle}
`

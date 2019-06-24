import styled, { css } from '@datapunt/asc-core'
import { color } from '../../../utils'
import { MenuItemSharedStyle } from '../MenuItem'
import { MENU_ITEM_SIZE } from '../constants'
import IconStyle from '../../Icon/IconStyle'
import { MenuItemLabelStyle } from '../MenuItemLabel'

export type Props = {
  isActive?: boolean
  hasToggle?: boolean
  underFlyOutMenu?: boolean
  hasCustomIcon?: boolean
}

const activeToggleStyle = css`
  border-left-color: ${color('secondary')};
`

const toggleStyle = css`
  border-left-color: ${color('tint', 'level2')};
`

const noToggleAndFlyOutStyle = css`
  ${IconStyle} {
    transform: translateY(4px);
    align-self: flex-start;
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
  ${({ isActive }) =>
    isActive &&
    css`
      ${MenuItemLabelStyle} {
        border-bottom: 2px solid ${color('secondary')};
      }
    `}
  ${({ hasToggle }) => hasToggle && toggleStyle}
  ${({ hasToggle, underFlyOutMenu }) =>
    !hasToggle && underFlyOutMenu && noToggleAndFlyOutStyle}
  ${({ isActive, hasToggle }) => hasToggle && isActive && activeToggleStyle}
`

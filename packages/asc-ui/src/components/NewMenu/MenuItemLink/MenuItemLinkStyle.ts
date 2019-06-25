import styled, { css } from '@datapunt/asc-core'
import { color } from '../../../utils'
import { MenuItemSharedStyle } from '../MenuItem'
import IconStyle from '../../Icon/IconStyle'
import { MenuItemLabelStyle } from '../MenuItemLabel'

export type Props = {
  isActive?: boolean
  hasToggle?: boolean
  underFlyOutMenu?: boolean
  hasCustomIcon?: boolean
}

const activeStyle = css`
  background-color: ${color('tint', 'level2')};

  ${MenuItemLabelStyle} {
    border-bottom: 2px solid ${color('secondary')};
  }
`

const activeToggleStyle = css`
  border-left-color: ${color('secondary')};
`

const toggleStyle = css`
  border-left-color: ${color('tint', 'level2')};
`

const flyOutStyle = css`
  ${IconStyle} {
    margin-right: 5px;
  }
`

const noToggleDirectMenuItem = css`
  ${MenuItemLabelStyle} {
    white-space: nowrap;
  }
`

const toggleAndFlyOutStyle = css`
  background-color: ${color('tint', 'level1')};
  ${IconStyle} {
    align-self: flex-start;
    transform: translateY(4px);
  }
`

export default styled.a.attrs<Props>({
  ...({ underFlyOutMenu }: Props) => (!underFlyOutMenu ? { tabIndex: 0 } : {}),
})<Props>`
  ${MenuItemSharedStyle};
  ${({ hasCustomIcon }) =>
    hasCustomIcon &&
    css`
      justify-content: space-between;
    `}
  ${({ isActive }) => isActive && activeStyle}
  ${({ hasToggle }) => hasToggle && toggleStyle}
  ${({ underFlyOutMenu }) => underFlyOutMenu && flyOutStyle} 
  ${({ hasToggle, underFlyOutMenu }) =>
    !hasToggle && !underFlyOutMenu && noToggleDirectMenuItem}
    
  ${({ hasToggle, underFlyOutMenu }) =>
    hasToggle && underFlyOutMenu && toggleAndFlyOutStyle}
  ${({ isActive, hasToggle }) => hasToggle && isActive && activeToggleStyle}
`

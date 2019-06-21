import styled, { css } from '@datapunt/asc-core'
import { color } from '../../../utils'
import { MenuItemSharedStyle } from '../MenuItem'

export type Props = {
  isActive?: boolean
  isToggleActive?: boolean
  underFlyOutMenu?: boolean
  hasCustomIcon?: boolean
}

const activeStyle = css`
  background-color: ${color('tint', 'level2')};
`

const noToggleAndFlyOutStyle = css`
  &:hover,
  &:focus {
    ${activeStyle}
  }
`

const toggleAndFlyOutStyle = css`
  background-color: ${color('tint', 'level1')};

  &:hover {
    color: ${color('secondary')};
    border-left-color: ${color('secondary')};
  }
`

const toggleStyle = css`
  border-bottom: 1px solid ${color('tint', 'level3')};

  &:hover,
  &:focus {
    border-left-color: ${color('secondary')};
  }
`

export default styled.a.attrs<Props>({
  ...({ underFlyOutMenu }: Props) => (!underFlyOutMenu ? { tabIndex: 0 } : {}),
})<Props>`
  ${MenuItemSharedStyle}
  ${({ hasCustomIcon }) =>
    hasCustomIcon &&
    css`
      justify-content: space-between;
    `}
  ${({ isActive }) => isActive && activeStyle}
  ${({ isToggleActive, underFlyOutMenu }) =>
    isToggleActive && underFlyOutMenu && toggleAndFlyOutStyle}
    
  ${({ isToggleActive, underFlyOutMenu }) =>
    !isToggleActive && underFlyOutMenu && noToggleAndFlyOutStyle}
    
  ${({ isToggleActive }) => isToggleActive && toggleStyle}
`

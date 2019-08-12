import styled, { css } from '@datapunt/asc-core'
import { MenuItemStyle } from '../MenuItem'
import MenuListStyle from '../MenuList/MenuListStyle'
import { FLY_OUT_WIDTH, MENU_ITEM_SIZE } from '../constants'
import { color } from '../../../utils'

export type Props = {
  hasToggle?: boolean
}

export default styled(MenuItemStyle)<Props>`
  ${MenuListStyle} {
    background-color: ${color('tint', 'level2')};
    width: ${FLY_OUT_WIDTH}px;
    top: ${MENU_ITEM_SIZE}px;
    order: 0;
    position: absolute;
    text-align: left;
    flex-direction: column;
    ${({ hasToggle }) =>
      !hasToggle &&
      css`
        border-bottom: 4px solid ${color('tint', 'level7')};
      `}

    & > ${MenuItemStyle} {
      font-weight: 400;
    }
  }

  &[aria-hidden='false'] {
    ${MenuListStyle} {
      display: block;
    }
  } 
`

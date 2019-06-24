import styled, { css } from '@datapunt/asc-core'
import { color } from '../../../utils'
import { MenuItemStyle } from '../MenuItem'
import MenuListStyle from '../MenuList/MenuListStyle'
import { FLY_OUT_WIDTH, MENU_ITEM_SIZE } from '../constants'

type Props = {
  hasToggle?: boolean
}

export default styled(MenuItemStyle)<Props>`
  ${MenuListStyle} {
    width: ${FLY_OUT_WIDTH}px;
    top: ${MENU_ITEM_SIZE}px;
    order: 0;
    background-color: ${color('tint', 'level2')};
    position: absolute;
    text-align: left;
    flex-direction: column;
    ${({ hasToggle }) =>
      !hasToggle &&
      css`
        border-bottom: 4px solid #000;
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

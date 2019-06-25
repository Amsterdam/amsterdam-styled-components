import styled, { css } from '@datapunt/asc-core'
import { MenuItemStyle } from '../MenuItem'
import MenuListStyle from '../MenuList/MenuListStyle'
import MenuItemTitleStyle from '../MenuItemTitle/MenuItemTitleStyle'
import {
  FLY_OUT_WIDTH,
  MENU_ITEM_SIZE,
  MENU_ITEM_FLYOUT_SIZE,
} from '../constants'

type Props = {
  hasToggle?: boolean
}

export default styled(MenuItemStyle)<Props>`
  ${MenuListStyle} {
    width: ${FLY_OUT_WIDTH}px;
    top: ${MENU_ITEM_SIZE}px;
    order: 0;
    position: absolute;
    text-align: left;
    flex-direction: column;
    ${({ hasToggle }) =>
      !hasToggle &&
      css`
        border-bottom: 4px solid #000;
      `}

    & > ${MenuItemStyle} {
      min-height: ${MENU_ITEM_FLYOUT_SIZE}px;
      font-weight: 400;
    }

    & > ${MenuItemTitleStyle} {
      min-height: ${MENU_ITEM_FLYOUT_SIZE}px;
    }
  }

  &[aria-hidden='false'] {
    ${MenuListStyle} {
      display: block;
    }
  } 
`

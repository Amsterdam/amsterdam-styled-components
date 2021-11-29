import styled, { css } from 'styled-components'
import { themeColor } from '../../../utils'
import { FLY_OUT_WIDTH, MENU_ITEM_SIZE } from '../constants'
import { MenuItemStyle } from '../MenuItem'
import MenuListStyle from '../MenuList/MenuListStyle'

export interface Props {
  hasToggle?: boolean
}

export default styled(MenuItemStyle).attrs({
  tabIndex: -1, // Fix for Firefox to be able to blur
  role: 'button',
})<Props>`
  ${MenuListStyle} {
    background-color: ${themeColor('tint', 'level2')};
    width: ${FLY_OUT_WIDTH}px;
    top: ${MENU_ITEM_SIZE}px;
    order: 0;
    position: absolute;
    text-align: left;
    flex-direction: column;
    ${({ hasToggle }) =>
      !hasToggle &&
      css`
        border-bottom: 4px solid ${themeColor('tint', 'level7')};
      `}

    & > ${MenuItemStyle} {
      font-weight: 400;
    }
  }

  &[aria-hidden='false'] {
    ${MenuListStyle} {
      display: flex;
    }
  }

  [aria-hidden='true'] {
    display: none;
  }
`

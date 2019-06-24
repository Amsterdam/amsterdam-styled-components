import styled from '@datapunt/asc-core'
import { color, showHide, ShowHideTypes } from '../../../utils'
import { MenuItemLinkStyle } from '../MenuItemLink'
import { MenuItemTitleStyle } from '../MenuItemTitle'
import { MenuListStyle } from '../MenuList'
import { MenuFlyOutStyle } from '../MenuFlyOut'
import { TOGGLE_BUTTON_SIZE, FLY_OUT_WIDTH } from '../constants'

export type Props = {
  align?: 'left' | 'right'
} & ShowHideTypes

export default styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align === 'left' ? 'flex-start' : `flex-end`)};
  max-width: ${FLY_OUT_WIDTH}px;

  ${MenuListStyle} {
    background-color: ${color('tint', 'level2')};
    position: absolute;
    width: ${FLY_OUT_WIDTH}px;
    flex-direction: column;
    top: ${TOGGLE_BUTTON_SIZE}px;
  }

  ${MenuItemLinkStyle} {
    border-bottom: 1px solid ${color('tint', 'level3')};
  }

  ${MenuFlyOutStyle} {
    ${MenuItemLinkStyle} {
      &:hover,
      &:focus {
        background-color: inherit;
      }
    }
    ${MenuItemTitleStyle} {
      border-bottom: 1px solid ${color('tint', 'level3')};
      border-left-color: ${color('tint', 'level2')};
    }
    ${MenuListStyle} {
      background-color: #fff;
      position: relative;
      top: 0;
    }
  }

  ${showHide()}
`

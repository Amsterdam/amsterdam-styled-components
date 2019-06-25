import styled from '@datapunt/asc-core'
import { color, showHide, ShowHideTypes } from '../../../utils'
import { MenuItemLinkStyle } from '../MenuItemLink'
import { MenuItemTitleStyle } from '../MenuItemTitle'
import { MenuListStyle } from '../MenuList'
import { MenuFlyOutStyle } from '../MenuFlyOut'
import { TOGGLE_BUTTON_SIZE, FLY_OUT_WIDTH } from '../constants'

export type Props = {
  align?: 'left' | 'right'
  onExpand?: Function
} & ShowHideTypes

export default styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align === 'left' ? 'flex-start' : `flex-end`)};
  max-width: ${FLY_OUT_WIDTH}px;

  & > ${MenuListStyle} {
    border-bottom: 5px solid ${color('tint', 'level7')};
  }

  ${MenuListStyle} {
    position: absolute;
    width: ${FLY_OUT_WIDTH}px;
    flex-direction: column;
    top: ${TOGGLE_BUTTON_SIZE}px;
  }

  ${MenuItemLinkStyle} {
    border-bottom: 1px solid ${color('tint', 'level3')};
  }

  ${MenuListStyle} {
    background-color: ${color('tint', 'level2')};
  }

  ${MenuFlyOutStyle} {
    ${MenuItemTitleStyle} {
      border-bottom: 1px solid ${color('tint', 'level3')};
      border-left-color: ${color('tint', 'level2')};
    }
    ${MenuListStyle} {
      background-color: ${color('tint', 'level1')};
      position: relative;
      top: 0;
    }
  }

  ${showHide()}
`

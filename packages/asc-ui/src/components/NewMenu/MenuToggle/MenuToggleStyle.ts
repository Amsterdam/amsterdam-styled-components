import styled from '@datapunt/asc-core'
import { MenuListStyle } from '../MenuList'
import { MenuFlyOutStyle } from '../MenuFlyOut'
import { TOGGLE_BUTTON_SIZE, FLY_OUT_WIDTH } from '../constants'

export type Props = {
  align?: 'left' | 'right'
}

export default styled.div<Props>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${MenuListStyle} {
    position: absolute;
    width: ${FLY_OUT_WIDTH}px;
    flex-direction: column;
    top: ${TOGGLE_BUTTON_SIZE}px;


    ${({ align }) => 
      (align === 'left')
        ? `left: 0;`
        : `right: 0;`
    }
  }

  ${MenuFlyOutStyle} {
    ${MenuListStyle} {
      position: relative;
      top: 0;
    }
  }
`

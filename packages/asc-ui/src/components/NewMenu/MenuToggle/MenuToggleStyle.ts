import styled from '@datapunt/asc-core'
import { MenuWrapperStyle } from '../MenuWrapper'
import { MenuFlyOutStyle } from '../MenuFlyOut'
import { FLY_OUT_WIDTH } from '../constants'

export default styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: ${FLY_OUT_WIDTH}px;

  ${MenuWrapperStyle} {
    flex-direction: column;
  }

  ${MenuFlyOutStyle} {
    ${MenuWrapperStyle} {
      position: relative;
      top: 0;
    }
  }
`

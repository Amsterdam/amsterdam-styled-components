import styled from '@datapunt/asc-core'
import { MenuItemStyle } from '../MenuItem'
import { FLY_OUT_WIDTH } from '../constants'

export default styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  font-weight: 400;

  & > ${MenuItemStyle} {
    font-weight: 500;
  }

  & & {
    width: ${FLY_OUT_WIDTH}px;
    top: 44px;
  }
`

import styled from '@datapunt/asc-core'
import { MenuItemStyle } from '../MenuItem'

export default styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  font-weight: 400;

  & > ${MenuItemStyle} {
    font-weight: 500;
  }
`

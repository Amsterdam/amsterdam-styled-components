import styled, { css } from '@datapunt/asc-core'
import { color, focusStyleOutline, svgFill } from '../../../utils'
import IconStyle from '../../Icon/IconStyle'
import { MenuItemLabelStyle } from '../MenuItemLabel'

export default styled.li`
  display: flex;
  flex-direction: column;
`

export const MenuItemSharedStyle = css`
  position: relative;
  line-height: 1.5;
  background-color: ${color('tint', 'level2')};
  border-color: ${color('tint', 'level2')};
  padding: 10px 15px 10px 7px;
  margin: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  border-left-style: solid;
  border-left-width: 8px;
  text-decoration: none;
  height: 100%;
  flex-direction: row;
  color: ${color('tint', 'level7')};

  ${IconStyle} {
    margin-right: 5px;

    &:last-child {
      margin-left: auto;
      align-self: center;
    }
  }

  &:focus {
    ${focusStyleOutline()}
  }

  &:hover,
  &:focus {
    ${MenuItemLabelStyle} {
      border-bottom: 2px solid ${color('secondary')};
      color: ${color('secondary')};
    }

    ${IconStyle} {
      & > svg {
        ${svgFill('secondary')};
      }
    }
  }
`

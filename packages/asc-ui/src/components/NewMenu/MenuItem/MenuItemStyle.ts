import styled, { css } from '@datapunt/asc-core'
import { color, focusStyleOutline, svgFill } from '../../../utils'
import IconStyle from '../../Icon/IconStyle'
import { MenuItemLabelStyle } from '../MenuItemLabel'

export const activeStyle = css`
  ${MenuItemLabelStyle} {
    border-bottom: 2px solid ${color('secondary')};
    color: ${color('secondary')};
  }

  ${IconStyle} {
    & > svg {
      ${svgFill('secondary')};
    }
  }
`

const MenuItemStyle = styled.li`
  user-select: none;
  display: flex;
  flex-direction: column;
  position: relative;
  flex-shrink: 0;
`

export const MenuItemSharedStyle = css`
  position: relative;
  line-height: 22px;
  padding: 10px 15px 10px 7px;
  margin: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  text-decoration: none;
  height: 100%;
  flex-direction: row;
  color: ${color('tint', 'level7')};
  border-left-style: solid;
  border-left-width: 8px;
  border-color: transparent;

  ${IconStyle} {
    margin-right: 5px;
    transform: translateY(4px);
    align-self: flex-start;

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
    background-color: ${color('tint', 'level2')};
    ${activeStyle}
  }
`

export default MenuItemStyle

import styled from '@datapunt/asc-core'
import { color, breakpoint, svgFill } from '../../utils'
import { MenuItemStyle } from '../Menu/MenuItem'
import { MenuItemLabelStyle } from '../Menu/MenuItemLabel'

const HeaderLinksStyle = styled.div`
  display: flex;
  position: absolute;
  top: 17px;
  right: 45px;
  align-items: center;
  justify-content: flex-end;

  ${MenuItemStyle} {
    height: 17px;
    padding: 0;

    &:not(:last-child) {
      margin-right: 30px;
    }

    &:focus,
    &:hover {
      background-color: transparent;

      ${MenuItemLabelStyle} {
        color: ${color('secondary')};
      }

      ${svgFill('secondary')};
    }

    ${MenuItemLabelStyle} {
      line-height: 17px;
    }
  }

  @media screen and ${breakpoint('max-width', 'laptopM')} {
    display: none;
  }
`

export default HeaderLinksStyle

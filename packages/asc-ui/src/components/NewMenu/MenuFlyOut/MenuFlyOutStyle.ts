import styled, { css } from '@datapunt/asc-core'
import { MenuItemStyle } from '../MenuItem'
import MenuListStyle from '../MenuList/MenuListStyle'
import { MenuItemLinkStyle } from '../MenuItemLink'
import { MenuItemLabelStyle } from '../MenuItemLabel'

type Props = {
  isToggleActive?: boolean
}

export default styled(MenuItemStyle)<Props>`
  ${MenuListStyle} {
    order: 0;
    background-color: #f5f5f5;
    position: absolute;
    text-align: left;
    flex-direction: column;
    ${({ isToggleActive }) =>
      !isToggleActive &&
      css`
        border-bottom: 4px solid #000;
      `}

    & > ${MenuItemStyle} {
      font-weight: 400;
    }
  }

  &[aria-hidden='false'] {
    ${MenuListStyle} {
      display: block;
    }

    ${MenuItemLinkStyle} {
      ${MenuItemLabelStyle} {
        border-bottom: 2px solid red;
      }
    }
  }
`

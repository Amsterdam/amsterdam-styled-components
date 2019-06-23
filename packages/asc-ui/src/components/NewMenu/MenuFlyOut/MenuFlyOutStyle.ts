import styled, { css } from '@datapunt/asc-core'
import { color } from '../../../utils'
import { MenuItemStyle } from '../MenuItem'
import MenuListStyle from '../MenuList/MenuListStyle'

type Props = {
  hasToggle?: boolean
}

export default styled(MenuItemStyle)<Props>`
  ${MenuListStyle} {
    order: 0;
    background-color: ${color('tint', 'level2')};
    position: absolute;
    text-align: left;
    flex-direction: column;
    ${({ hasToggle }) =>
      !hasToggle &&
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
  }
`

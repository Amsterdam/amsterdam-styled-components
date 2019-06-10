import styled from '@datapunt/asc-core'
import MenuStyle from '../Menu'
import { color, breakpoint, svgFill } from '../../utils'

const HeaderLinksStyle = styled.div`
  display: flex;
  position: absolute;
  top: 17px;
  right: 45px;
  align-items: center;
  justify-content: flex-end;

  ${MenuStyle.MenuItemStyle} {
    height: 17px;
    padding: 0;

    &:not(:last-child) {
      margin-right: 30px;
    }

    &:focus,
    &:hover {
      background-color: transparent;

      ${MenuStyle.MenuItemLabelStyle} {
        color: ${color('secondary')};
      }

      & svg {
        ${svgFill('secondary')};
      }
    }

    ${MenuStyle.MenuItemLabelStyle} {
      line-height: 17px;
    }
  }

  @media screen and ${breakpoint('max-width', 'laptopM')} {
    display: none;
  }
`

export default HeaderLinksStyle

import styled from '@datapunt/asc-core'
import { MenuStyleProps } from './types'
import IconStyle from '../Icon/IconStyle'
import { svgFill, color, getTypographyFromTheme } from '../../utils'
import { SharedMenuItemStyle } from './SharedMenuItemStyle'

export const MenuItemLabelStyle = styled.span<
  MenuStyleProps.MenuItemStyleProps
>`
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({ focused }) =>
    focused ? color('secondary', 'main') : 'transparent'};
  line-height: 22px;
  font-weight: 400;
  color: ${color('tint', 'level6')};
`

export const MenuItemStyle = styled(SharedMenuItemStyle)<
  MenuStyleProps.MenuItemStyleProps
>`
  font-size: ${({ theme }) => getTypographyFromTheme(theme, 'fontSize')};
  position: relative;
  min-height: ${({ height }) => `${height}px`};
  flex-direction: row;

  ${IconStyle} {
    transform: translateY(3px);
    align-self: flex-start;

    &:not(:last-child) {
      margin-right: 5px;
    }

    & > svg {
      ${svgFill('tint', 'level7')};
    }
  }

  & > a {
    display: flex;
    text-decoration: none;
    width: 100%;
  }

  &:hover,
  &:focus {
    ${MenuItemLabelStyle} {
      border-bottom-color: ${color('secondary', 'main')};
      color: ${color('secondary', 'main')};
    }

    ${IconStyle} {
      & > svg {
        ${({ theme, hoverColor }) => svgFill(hoverColor)({ theme })};
      }
    }
  }
`

export const MenuItemWrapperStyle = styled.li``

export const SubMenuItemStyle = styled(SharedMenuItemStyle)<
  MenuStyleProps.MenuItemStyleProps
>`
  flex-direction: column;
  font-size: ${({ theme }) => getTypographyFromTheme(theme, 'fontSize')};
  min-height: ${({ height }) => `${height}px`};
  position: relative;

  /* stylelint-disable-next-line no-descending-specificity */
  ${IconStyle} {
    &:not(:last-child) {
      margin-right: 5px;
    }

    &:last-child {
      position: absolute;
      right: 15px;
    }

    /* stylelint-disable-next-line no-descending-specificity */
    & > svg {
      ${svgFill('tint', 'level7')};
    }
  }

  &:hover,
  &:focus {
    ${MenuItemLabelStyle} {
      border-bottom-color: ${color('secondary', 'main')};
    }

    ${IconStyle} {
      & > svg {
        ${({ theme, hoverColor }) => svgFill(hoverColor)({ theme })};
      }
    }
  }
`

export default MenuItemStyle

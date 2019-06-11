import styled, { css } from '@datapunt/asc-core'
import { MenuStyleProps } from './types'
import MenuItemStyle from './MenuItemStyle'
import IconStyle from '../Icon/IconStyle'
import MenuButtonStyle, { MenuButtonLabelStyle } from './MenuButtonStyle'
import SubMenuButtonStyle, {
  SubMenuButtonLabelStyle,
} from './SubMenuButtonStyle'
import { color, svgFill, focusStyleOutline } from '../../utils'
import { MenuListWrapperStyle } from './MenuListStyle'

const SubMenuListStyle = styled.ul<MenuStyleProps.MenuListStyleProps>`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  ${MenuItemStyle} {
    &:hover,
    &:focus {
      background-color: transparent;
    }

    border-left-style: solid;
    border-left-color: ${color('tint', 'level3')};
    border-left-width: 8px;
    justify-content: flex-start;
  }
`

export const SubMenuWrapperStyle = styled.li<
  MenuStyleProps.MenuWrapperStyleProps
>`
  padding: 10px 15px 10px 7px;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  border-left: solid 8px transparent;

  ${/* sc-selector */ MenuListWrapperStyle}:first-of-type {
    right: 0;
  }

  &:focus,
  &:hover {
    outline: none;
    background-color: ${color('tint', 'level2')};

    ${/* sc-selector */ MenuButtonLabelStyle}:first-of-type {
      border-bottom-color: ${color('secondary')};
    }

    ${SubMenuButtonStyle} {
      ${/* sc-selector */ SubMenuButtonLabelStyle}:first-of-type {
        color: ${color('secondary')};
      }

      ${IconStyle} {
        & > svg {
          ${({ theme, focused }) => focused && svgFill('secondary')({ theme })};
        }
      }
    }
  }

  ${focusStyleOutline()}

  ${MenuButtonStyle} {
    background-color: ${({ theme, focused }) =>
      focused ? color('tint', 'level2')({ theme }) : 'transparent'};
    ${/* sc-selector */ MenuButtonLabelStyle}:first-of-type {
      border-bottom-color: ${({ theme, focused }) =>
        focused ? color('secondary')({ theme }) : 'transparent'};
    }

    ${IconStyle} {
      /* stylelint-disable-next-line no-descending-specificity */
      & > svg {
        ${({ theme, focused }) => focused && svgFill('secondary')({ theme })};
      }
    }
  }

  ${SubMenuButtonStyle} {
    ${/* sc-selector */ SubMenuButtonLabelStyle}:first-of-type {
      color: ${({ theme, focused }) =>
        focused ? color('secondary')({ theme }) : 'inherit'};
    }
  }

  ${props =>
    props.css &&
    css`
      ${props.css}
    `}
`

export default SubMenuListStyle

export const SubMenuListWrapperStyle = styled.li.attrs(() => ({
  role: 'submenu',
  tabIndex: -1,
}))<MenuStyleProps.MenuListStyleProps>`
  order: ${({ position }) => (position === 'bottom' ? -1 : 0)};
  background-color: ${color('tint', 'level1')};
  width: 278px;
  width: 100%;

  &:focus {
    outline: none;
  }
`

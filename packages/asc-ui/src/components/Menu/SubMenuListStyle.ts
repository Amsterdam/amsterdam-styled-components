import styled, { css } from '@datapunt/asc-core'
import { MenuStyleProps } from './types'
import MenuItemStyle, {
  MenuItemWrapperStyle,
  MenuItemLabelStyle,
} from './MenuItemStyle'
import IconStyle from '../Icon/IconStyle'
import MenuButtonStyle, { MenuButtonLabelStyle } from './MenuButtonStyle'
import SubMenuButtonStyle, {
  SubMenuButtonLabelStyle,
} from './SubMenuButtonStyle'
import { color, svgFill } from '../../utils'
import { MenuListWrapperStyle } from './MenuListStyle'
import { SharedMenuItemStyle } from './SharedMenuItemStyle'

const SubMenuListStyle = styled.ul<MenuStyleProps.MenuListStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  ${MenuItemWrapperStyle} {
    width: 100%;
  }

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

export const SubMenuWrapperStyle = styled(SharedMenuItemStyle)<
  MenuStyleProps.MenuWrapperStyleProps
>`
  flex-direction: row;
  height: ${({ height }) => `${height}px`};
  position: relative;

  ${/* sc-selector */ MenuListWrapperStyle}:first-of-type {
    left: -8px;
  }

  ${({ theme, focused }) =>
    focused &&
    `
    & > span > ${MenuItemLabelStyle} {
      border-bottom-color: ${color('secondary', 'main')({ theme })};
      color: ${color('secondary', 'main')({ theme })};
    }
  `}

  &:focus,
  &:hover {
    & > span > ${MenuItemLabelStyle} {
      border-bottom-color: ${color('secondary', 'main')};
      color: ${color('secondary', 'main')};
    }

    ${MenuItemWrapperStyle} {
      & > ${MenuItemLabelStyle} {
        border-bottom-color: ${color('secondary', 'main')};
        color: ${color('secondary', 'main')};
      }

      & > ${/* sc-selector */ MenuButtonLabelStyle}:first-of-type {
        border-bottom-color: ${color('secondary')};
      }
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

export const SubMenuListWrapperStyle = styled.div.attrs(() => ({
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

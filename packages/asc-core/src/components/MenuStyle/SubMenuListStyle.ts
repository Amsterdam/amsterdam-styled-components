import styled from '../../styled-components'
import { MenuStyleProps } from './types'
import MenuItemStyle from './MenuItemStyle'
import IconStyle from '../IconStyle'
import MenuButtonStyle, { MenuButtonLabelStyle } from './MenuButtonStyle'
import SubMenuButtonStyle from './SubMenuButtonStyle'
import { color, svgFill } from '../../utils'

export const SubMenuWrapperStyle = styled.div<
  MenuStyleProps.MenuWrapperStyleProps
>`
  &:focus,
  &:hover {
    outline: none;

    ${MenuButtonStyle} {
      background-color: ${color('tint', 'level2')}
      ${MenuButtonLabelStyle}:first-of-type  {
        border-bottom-color: ${color('secondary')};
      }
    }
    ${SubMenuButtonStyle} {
      border-left-color: ${color('secondary')}

      ${IconStyle} {
        & > svg {
          ${({ theme, focused }) => focused && svgFill('secondary')({ theme })};
        }
      }
    }
}
  ${MenuButtonStyle} {
    background-color: ${({ theme, focused }) =>
      focused ? color('tint', 'level2')({ theme }) : 'transparent'}

    ${MenuButtonLabelStyle} {
      border-bottom-color: ${({ theme, focused }) =>
        focused ? color('secondary')({ theme }) : 'transparent'}
      color: ${({ theme, focused }) =>
        focused ? color('secondary')({ theme }) : 'inherit'}
    }

    ${IconStyle} {
      & > svg {
        ${({ theme, focused }) => focused && svgFill('secondary')({ theme })};
      }
    }
  }
`

const SubMenuListStyle = styled.ul<MenuStyleProps.MenuListStyleProps>`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  ${MenuItemStyle} {
    border-left-style: solid;
    border-left-color: ${color('tint', 'level3')};
    border-left-width: 8px;
    justify-content: flex-start;

    &:hover,
    &:focus {
      background-color: transparent;
      color: ${color('secondary')};
    }
  }
`
export default SubMenuListStyle

export const SubMenuListWrapperStyle = styled.div.attrs(() => ({
  role: 'submenu',
  tabIndex: -1,
}))<MenuStyleProps.MenuListStyleProps>`
  order: ${({ position }) => (position === 'bottom' ? -1 : 0)};
  background-color: ${color('tint', 'level1')};
  max-width: 278px;
  width: 100%;

  &:focus {
    outline: none;
  }
`

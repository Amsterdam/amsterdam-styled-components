import styled from '../../styled-components'
import { MenuStyleProps } from './types'
import MenuItemStyle, { MenuItemLabelStyle } from './MenuItemStyle'
import IconStyle from '../IconStyle'
import { color, svgFill } from '../../utils'

export const SubMenuButtonLabelStyle = MenuItemLabelStyle

const SubMenuButtonStyle = styled(MenuItemStyle)<
  MenuStyleProps.MenuButtonStyleProps
>`
  border-left-color: ${({ focused, theme }) => focused && color('secondary')({ theme })};
  justify-content: space-between;

  &:hover,
  &:focus {
    border-left-color: ${color('secondary')};

    ${SubMenuButtonLabelStyle} {
      border-bottom-color: ${color('secondary')};
      color: ${color('secondary')};
    }

    ${IconStyle} {
      & > svg {
        fill: ${svgFill('secondary')};
      }
    }
  }
`

export default SubMenuButtonStyle

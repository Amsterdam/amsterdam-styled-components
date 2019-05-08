import styled from '../../styled-components'
import { MenuStyleProps } from './types'
import MenuItemStyle, { MenuItemLabelStyle } from './MenuItemStyle'
import IconStyle from '../IconStyle'
import { color, svgFill } from '../../utils'

const SubMenuButtonStyle = styled(MenuItemStyle)<
  MenuStyleProps.MenuButtonStyleProps
>`
  justify-content: space-between;

  &:hover,
  &:focus {
    border-left-color: ${({ focused }) =>
      focused && color('secondary', 'main')}};

    ${MenuItemLabelStyle} {
      border-bottom-color: ${color('secondary', 'main')};
    }

    ${IconStyle} {
      & > svg {
        fill: ${svgFill('secondary', 'main')};
      }
    }
  }
`

export default SubMenuButtonStyle

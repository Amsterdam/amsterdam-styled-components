import styled from '../../styled-components'
import { MenuStyleProps } from './types'
import MenuItemStyle from './MenuItemStyle'
import { color, svgFill } from '../../utils'

const SubMenuButtonStyle = styled(MenuItemStyle)<
  MenuStyleProps.MenuButtonStyleProps
>`
  justify-content: space-between;

  & > span:last-child {
    border-bottom-width: 0px;
  }

  &:hover,
  &:focus {
    border-left-color: ${({ focused }) =>
      focused && color('secondary', 'main')}};

    & > span:first-child,
    & > span:first-child {
      border-bottom-color: ${color('secondary', 'main')};
    }

    & > span > svg {
      fill: ${svgFill('secondary', 'main')};
    }
  }
`

export default SubMenuButtonStyle

import styled from '../../styled-components'
import { MenuStyleProps } from './types'
import MenuItemStyle from './MenuItemStyle'
import { getColorFromTheme, fillSvgFromTheme } from '../../utils'

const SubMenuButtonStyle = styled(MenuItemStyle)<
  MenuStyleProps.MenuButtonStyleProps
>`
  justify-content: space-between;

  & > span:last-child {
    border-bottom-width: 0px;
  }

  &:hover,
  &:focus {
    border-left-color: ${({ theme, focused }) =>
      focused && getColorFromTheme(theme, 'secondary', 'main')}};

    & > span:first-child,
    & > span:first-child {
      border-bottom-color: ${({ theme }) =>
        getColorFromTheme(theme, 'secondary', 'main')}};
    }

    & > span > svg {
      fill: ${({ theme }) => fillSvgFromTheme(theme, 'secondary', 'main')};
    }
  }
`

export default SubMenuButtonStyle

import styled from '@datapunt/asc-core'
import { MenuStyleProps } from './types'
import MenuButtonStyle, { MenuButtonLabelStyle } from './MenuButtonStyle'
import { color } from '../../utils'

export const SubMenuButtonLabelStyle = MenuButtonLabelStyle

const SubMenuButtonStyle = styled(MenuButtonStyle)<
  MenuStyleProps.MenuButtonStyleProps
>`
  justify-content: space-between;
  border-left-color: ${({ theme, focused }) =>
    focused ? color('secondary')({ theme }) : 'transparent'};
`

export default SubMenuButtonStyle

import styled from '@datapunt/asc-core'
import MenuItemStyle from './MenuItemStyle'
import { color } from '../../utils'

export const MenuLabelStyle = styled(MenuItemStyle)`
  font-weight: 700;
  color: ${color('tint', 'level7')};
  min-height: ${({ height }) => `${height}px`};
`

export default MenuLabelStyle

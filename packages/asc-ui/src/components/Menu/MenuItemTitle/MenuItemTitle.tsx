import type { ReactNode } from 'react'
import MenuItemTitleStyle from './MenuItemTitleStyle'

interface Props {
  children?: ReactNode
}

function MenuItemTitle({ children }: Props) {
  return (
    <MenuItemTitleStyle forwardedAs="li" variant="blank">
      {children}
    </MenuItemTitleStyle>
  )
}

export default MenuItemTitle

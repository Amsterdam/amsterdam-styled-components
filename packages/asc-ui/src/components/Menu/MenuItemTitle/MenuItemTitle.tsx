import MenuItemTitleStyle from './MenuItemTitleStyle'

function MenuItemTitle({ children }) {
  return (
    <MenuItemTitleStyle forwardedAs="li" variant="blank">
      {children}
    </MenuItemTitleStyle>
  )
}

export default MenuItemTitle

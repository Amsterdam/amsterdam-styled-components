import { createContext, useContext } from 'react'

export interface MenuContextValue {
  setOpenToggle?: (open: boolean) => void
  underFlyOutMenu?: boolean
  hasToggle?: boolean
  onExpand?: (expanded: boolean) => void
}

const initialValues: MenuContextValue = {
  underFlyOutMenu: false,
  hasToggle: false,
}

const MenuContext = createContext(initialValues)

export default MenuContext

export const useMenuContext = () => useContext(MenuContext)

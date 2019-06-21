import React from 'react'

export type ContextValueTypes = {
  activeChild?: number
  setActiveChild?: Function
  underFlyOutMenu?: boolean
  isToggleActive?: boolean
}

const initialValues: ContextValueTypes = {
  activeChild: 0,
  setActiveChild: () => {},
  underFlyOutMenu: false,
  isToggleActive: false,
}

const MenuContext = React.createContext(initialValues)

export default MenuContext
export const useMenuContext = () => React.useContext(MenuContext)

import React from 'react'

export type ContextValueTypes = {
  setOpenToggle?: Function
  underFlyOutMenu?: boolean
  hasToggle?: boolean
  onExpand?: Function
}

const initialValues: ContextValueTypes = {
  setOpenToggle: () => {},
  underFlyOutMenu: false,
  hasToggle: false,
}

const MenuContext = React.createContext(initialValues)

export default MenuContext
export const useMenuContext = () => React.useContext(MenuContext)

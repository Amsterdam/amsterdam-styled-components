import React from 'react'

export type ContextValueTypes = {
  activeChild?: number
  setActiveChild?: Function
  setActiveToggleChild?: Function
  setOpenToggle?: Function
  underFlyOutMenu?: boolean
  hasToggle?: boolean
  onExpand?: Function
}

const initialValues: ContextValueTypes = {
  activeChild: 0,
  setActiveChild: () => {},
  setActiveToggleChild: () => {},
  setOpenToggle: () => {},
  underFlyOutMenu: false,
  hasToggle: false,
}

const MenuContext = React.createContext(initialValues)

export default MenuContext
export const useMenuContext = () => React.useContext(MenuContext)

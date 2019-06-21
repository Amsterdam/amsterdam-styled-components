import React from 'react'
import { Close, Menu } from '@datapunt/asc-assets'
import MenuWrapper from '../MenuWrapper/MenuWrapper'
import MenuContext from '../MenuContext'
import useFocussedChildren from '../useFocussedChildren'
import useKeysToFocus from '../useKeysToFocus'
import ownerDocument from '../../../utils/ownerDocument'
import MenuToggleStyle from './MenuToggleStyle'
import ButtonToggle from '../../ButtonToggle'
import Icon from '../../Icon'

const MenuToggle: React.FC<{}> = ({ children: childrenProps }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [activeChild, setActiveChild] = React.useState(0)
  const ref = React.useRef(null)
  const { children, filteredChildren } = useFocussedChildren(childrenProps)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  const { onKeyDown } = useKeysToFocus(
    filteredChildren,
    activeChild,
    setActiveChild,
    setMenuOpen,
  )

  const onClose = () => {
    setTimeout(() => {
      const element = ref.current
      if (element) {
        const currentFocus = ownerDocument(element).activeElement
        // @ts-ignore
        if (!element.contains(currentFocus)) {
          setActiveChild(0)
          setMenuOpen(false)
        }
      }
    })
  }

  return (
    <MenuContext.Provider
      value={{
        activeChild,
        setActiveChild,
        underFlyOutMenu: false,
        isToggleActive: true,
      }}
    >
      <MenuToggleStyle ref={ref} onKeyDown={onKeyDown} onBlur={onClose}>
        <ButtonToggle open={menuOpen} onClick={toggleMenu}>
          <Icon>{menuOpen ? <Close /> : <Menu />}</Icon>
        </ButtonToggle>
        <MenuWrapper aria-hidden={!menuOpen}>{children}</MenuWrapper>
      </MenuToggleStyle>
    </MenuContext.Provider>
  )
}

export default MenuToggle

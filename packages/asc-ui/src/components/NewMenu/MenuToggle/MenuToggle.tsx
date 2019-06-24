import React from 'react'
import { Close, Menu } from '@datapunt/asc-assets'
import MenuList from '../MenuList/MenuList'
import MenuContext from '../MenuContext'
import useFocussedChildren from '../useFocussedChildren'
import useKeysToFocus from '../useKeysToFocus'
import ownerDocument from '../../../utils/ownerDocument'
import MenuToggleStyle, { Props } from './MenuToggleStyle'
import ButtonToggle from '../../ButtonToggle'
import Icon from '../../Icon'

const MenuToggle: React.FC<Props> = ({
  children: childrenProps,
  align = 'left',
  ...otherProps
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [activeChild, setActiveChild] = React.useState(0)
  const ref = React.useRef(null)
  const { children, filteredChildren } = useFocussedChildren(childrenProps)
  const toggleMenu = () => {
    setActiveChild(0)
    setMenuOpen(!menuOpen)
  }

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
        setActiveToggleChild: setActiveChild,
        underFlyOutMenu: false,
        hasToggle: true,
      }}
    >
      <MenuToggleStyle
        ref={ref}
        onKeyDown={onKeyDown}
        onBlur={onClose}
        align={align}
        {...otherProps}
      >
        <ButtonToggle open={menuOpen} onClick={toggleMenu}>
          <Icon>{menuOpen ? <Close /> : <Menu />}</Icon>
        </ButtonToggle>
        <MenuList aria-hidden={!menuOpen}>{children}</MenuList>
      </MenuToggleStyle>
    </MenuContext.Provider>
  )
}

MenuToggle.defaultProps = {
  align: 'left',
}

export default MenuToggle

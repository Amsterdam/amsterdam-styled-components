import React from 'react'
import MenuStyle, { MenuStyleProps } from './index'
import MenuList from './MenuList'
import { MenuContext } from './Menu'
import { Icon } from '../..'
import { KeyboardKeys } from '../../types'

const { MenuDropDownStyle, MenuDropDownButtonStyle } = MenuStyle

type Props = {
  position?: MenuStyleProps.Position
  label?: string
  mobile?: boolean
  icon?: React.ReactNode
  arrowIcon?: React.ReactNode
  buttonHeight?: number
  id?: any
  index?: number
}

const MenuDropDown: React.FC<Props> = ({
  id,
  label,
  children,
  buttonHeight,
  position,
  icon,
  index: currentIndex,
  mobile,
}) => {
  const menuRef = React.useRef<HTMLDivElement>(null)

  const { open, onKeyDown, onClose, onClick }: any = React.useContext(
    MenuContext,
  )

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === KeyboardKeys.Enter) {
      !open && onClick()
    } else {
      onKeyDown(e)
    }
  }

  const clonedChildren = React.Children.map(children, (child, index) =>
    React.cloneElement(child as React.ReactElement<any>, {
      index: currentIndex && currentIndex + index + 1,
    }),
  )

  const click = () => !mobile && setTimeout(onClick, 200)
  const clickWhenClosed = () => !mobile && !open && setTimeout(onClick, 200)

  return (
    <MenuDropDownStyle
      id={id}
      ref={menuRef}
      onKeyDown={handleKeyPress}
      onBlur={onClose}
      onMouseLeave={click}
      onMouseOver={clickWhenClosed}
      tabIndex={0}
    >
      <MenuDropDownButtonStyle
        {...{
          focused: open,
          height: buttonHeight,
        }}
        onMouseLeave={clickWhenClosed}
        onClick={onClick}
      >
        {icon && <Icon>{icon}</Icon>}
      </MenuDropDownButtonStyle>
      <MenuList
        {...{
          position,
          id,
          open,
          top: buttonHeight,
        }}
        onClose={onClose}
      >
        {clonedChildren}
      </MenuList>
    </MenuDropDownStyle>
  )
}

MenuDropDown.defaultProps = {
  buttonHeight: 50,
}

export default MenuDropDown

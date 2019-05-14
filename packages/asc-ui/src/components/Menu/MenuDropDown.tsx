import React from 'react'
import MenuStyle, { MenuStyleProps } from '../../styles/components/MenuStyle'
import MenuButton from './MenuButton'
import MenuList from './MenuList'
import { MenuContext } from './Menu'
import { KeyboardKeys } from '../../types'

const { MenuWrapperStyle } = MenuStyle

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
}) => {
  const menuRef = React.useRef<HTMLDivElement>(null)

  const { open, mobile, onKeyDown, onClose, onClick }: any = React.useContext(MenuContext)

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === KeyboardKeys.Enter) {
      !open && onClick()
    } else {
      onKeyDown(e)
    }
  }


  const clonedChildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child as React.ReactElement<any>, {
      index: currentIndex && currentIndex + index + 1,
      borderBottom: mobile
    })
  })

  return (
      <MenuWrapperStyle
        id={id}
        ref={menuRef}
        onKeyDown={handleKeyPress}
        onBlur={onClose}
        onMouseLeave={() => setTimeout(onClick, 200)}
        tabIndex={0}
      >
        <MenuButton
          {...{
            icon,
            open,
            position,
            label,
            square: mobile,
            height: buttonHeight,
          }}
          onMouseOut={() => !open && setTimeout(onClick, 200)}
          onClick={onClick}
        />
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
      </MenuWrapperStyle>
  )
}

MenuDropDown.defaultProps = {
  buttonHeight: 50
}

export default MenuDropDown

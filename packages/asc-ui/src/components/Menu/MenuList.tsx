import React from 'react'
import MenuStyle, { MenuStyleProps } from './index'
import { MenuContext } from './Menu'

const { MenuListWrapperStyle, MenuListStyle } = MenuStyle

type Props = {
  open: boolean
  id: string
  onClose: Function
  label?: string
  children?: any
  index?: number
  top?: number
  arrowIcon?: React.ReactNode
} & MenuStyleProps.MenuListStyleProps

const MenuList = ({
  id,
  children,
  open,
  onClose,
  top,
  ...otherProps
}: Props) => {
  const menuListRef = React.useRef<HTMLDivElement>(null)
  const {
    align,
    expandedChild,
    expandedChildIndex,
    nrOfChildrenChild,
  }: any = React.useContext(MenuContext)

  const clonedChildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child as React.ReactElement<any>, {
      index:
        expandedChild && index > expandedChildIndex
          ? nrOfChildrenChild + expandedChildIndex + index - expandedChildIndex
          : index,
    })
  })

  return (
    <MenuListWrapperStyle
      ref={menuListRef}
      aria-hidden={!open}
      onBlur={() => onClose(menuListRef)}
      alignRight={align === MenuStyleProps.Align.right ? true : false}
      top={top}
      {...otherProps}
    >
      <MenuListStyle labelId={id}>{clonedChildren}</MenuListStyle>
    </MenuListWrapperStyle>
  )
}

MenuList.defaultProps = {
  position: MenuStyleProps.Position.top,
  top: 0,
}

export default MenuList

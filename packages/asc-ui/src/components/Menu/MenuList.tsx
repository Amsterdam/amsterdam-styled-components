import React from 'react'
import MenuStyle, { MenuStyleProps } from '../../styles/components/MenuStyle'
import { MenuContext } from './Menu'

type Props = {
  open: boolean
  id: string
  onClose: Function
  label?: string
  children?: any
  index?: number
  arrowIcon?: React.ReactNode
} & MenuStyleProps.MenuListStyleProps

const MenuList = ({
  id,
  children,
  position = MenuStyleProps.Position.top,
  open,
  onClose,
}: Props) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const {
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
    <MenuStyle.MenuListWrapperStyle
      ref={ref}
      aria-hidden={!open}
      onBlur={() => onClose()}
      position={position}
    >
      <MenuStyle.MenuListStyle labelId={id}>
        {clonedChildren}
      </MenuStyle.MenuListStyle>
    </MenuStyle.MenuListWrapperStyle>
  )
}

export default MenuList

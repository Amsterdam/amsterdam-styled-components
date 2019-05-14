import React from 'react'
import MenuStyle, { MenuStyleProps } from '../../styles/components/MenuStyle'
import { MenuContext } from './Menu'

const { MenuListWrapperStyle, MenuListStyle } = MenuStyle

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
  open,
  onClose,
  ...otherProps
}: Props) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const {
    expandedChild,
    expandedChildIndex,
    nrOfChildrenChild,
    mobile
  }: any = React.useContext(MenuContext)

  const clonedChildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child as React.ReactElement<any>, {
      index:
        expandedChild && index > expandedChildIndex
          ? nrOfChildrenChild + expandedChildIndex + index - expandedChildIndex
          : index,
      borderBottom: mobile,
    })
  })

  return (
    <MenuListWrapperStyle
      ref={ref}
      aria-hidden={!open}
      onBlur={() => onClose()}
      {...otherProps}
    >
      <MenuListStyle labelId={id}>
        {clonedChildren}
      </MenuListStyle>
    </MenuListWrapperStyle>
  )
}

MenuList.defaultProps = {
  position: MenuStyleProps.Position.top,
  top: 0
}

export default MenuList

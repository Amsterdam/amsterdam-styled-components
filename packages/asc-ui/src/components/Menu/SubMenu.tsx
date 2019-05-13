import React from 'react'
import MenuStyle, { MenuStyleProps } from '../../styles/components/MenuStyle'
import { KeyboardKeys } from '../../types'
import { MenuContext } from './Menu'
import { Icon } from '../../index'

type Props = {
  role?: string
  label?: string
  divider?: boolean
  mobile?: boolean
  index?: number
  arrowIcon?: React.ReactNode
} & MenuStyleProps.MenuItemStyleProps

const SubMenu: React.FC<Props> = ({
  id,
  arrowIcon,
  children,
  label,
  index: currentIndex,
  ...otherProps
}) => {
  const subMenuRef = React.useRef<HTMLLIElement>(null)
  const {
    selectedChild,
    expandedChild,
    expandedChildIndex,
    setExpandedChild,
    resetExpandedChild,
    handleOnKeyDown,
    mobile,
  }: any = React.useContext(MenuContext)

  const expanded = mobile && expandedChild && currentIndex === expandedChildIndex
  const focused = currentIndex === selectedChild

  React.useEffect(() => {
    if (subMenuRef && subMenuRef.current && focused) {
      subMenuRef.current.focus()
    }
  }, [selectedChild])

  const handleOnClick = (e: React.KeyboardEvent | React.MouseEvent) => {
    e.preventDefault()
    const nrOfChildren = React.Children.count(children)

    if (expandedChild) {
      resetExpandedChild()
    }

    if (!expandedChild || expandedChildIndex !== currentIndex) {
      setExpandedChild(nrOfChildren, currentIndex)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === KeyboardKeys.Enter) {
      handleOnClick(e)
    } else {
      handleOnKeyDown(e)
    }
  }

  const clonedChildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child as React.ReactElement<any>, {
      index: currentIndex && currentIndex + index + 1,
      borderBottom: mobile
    })
  })

  return (
    <>
      <MenuStyle.SubMenuButtonStyle
        focused={focused || expanded}
        onClick={handleOnClick}
        onKeyDown={handleKeyPress}
        tabIndex={focused ? 0 : -1}
        ref={subMenuRef}
        {...otherProps}
      >
        {label && <MenuStyle.SubMenuButtonLabelStyle>{label}</MenuStyle.SubMenuButtonLabelStyle>}
        {mobile && (
          <Icon inline size={24} padding={4} rotate={expanded ? 180 : 0}>
            {arrowIcon}
          </Icon>
        )}
      </MenuStyle.SubMenuButtonStyle>
      <MenuStyle.SubMenuListWrapperStyle
        aria-hidden={expanded ? false : true}
      >
        <MenuStyle.SubMenuListStyle labelId={id}>
          {clonedChildren}
        </MenuStyle.SubMenuListStyle>
      </MenuStyle.SubMenuListWrapperStyle>
    </>
  )
}

export default SubMenu

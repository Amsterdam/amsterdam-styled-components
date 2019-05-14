import React from 'react'
import MenuStyle, { MenuStyleProps } from '../../styles/components/MenuStyle'
import { KeyboardKeys } from '../../types'
import { MenuContext } from './Menu'
import { Icon } from '../../index'

const { SubMenuWrapperStyle, SubMenuButtonStyle, MenuItemStyle, SubMenuListWrapperStyle, MenuListWrapperStyle, SubMenuListStyle, MenuListStyle } = MenuStyle

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
  const {
    selectedChild,
    expandedChild,
    expandedChildIndex,
    setExpandedChild,
    resetExpandedChild,
    onKeyDown,
    mobile,
  }: any = React.useContext(MenuContext)

  const subMenuRef = React.useRef<HTMLDivElement>(null)

  const expanded = expandedChild && currentIndex === expandedChildIndex
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
      onKeyDown(e)
    }
  }

  const clonedChildren = React.Children.map(children, (child, index) => {
    console.log('handle', currentIndex, index)
    return React.cloneElement(child as React.ReactElement<any>, {
      index: currentIndex && currentIndex + index + 1,
      borderBottom: mobile
    })
  })

  const SubMenuButton = mobile ? SubMenuButtonStyle : MenuItemStyle
  const SubMenuListWrapper = mobile ? SubMenuListWrapperStyle : MenuListWrapperStyle
  const SubMenuList = mobile ? SubMenuListStyle : MenuListStyle

  return (
    <SubMenuWrapperStyle tabIndex={0} ref={subMenuRef} onClick={handleOnClick}
    onKeyDown={handleKeyPress}>
      <SubMenuButton
        focused={focused || expanded}
        {...otherProps}
      >
        {label && <MenuStyle.SubMenuButtonLabelStyle>{label}</MenuStyle.SubMenuButtonLabelStyle>}
        {mobile && (
          <Icon inline size={24} padding={4} rotate={expanded ? 180 : 0}>
            {arrowIcon}
          </Icon>
        )}
      </SubMenuButton>
      <SubMenuListWrapper
        aria-hidden={expanded ? false : true}
      >
        <SubMenuList labelId={id}>
          {clonedChildren}
        </SubMenuList>
      </SubMenuListWrapper>
    </SubMenuWrapperStyle>
  )
}

export default SubMenu

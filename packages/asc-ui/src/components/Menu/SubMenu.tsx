import React from 'react'
import MenuStyle, { MenuStyleProps } from './index'
import { KeyboardKeys } from '../../types'
import { MenuContext } from './Menu'
import { Icon } from '../../index'

const {
  SubMenuWrapperStyle,
  SubMenuListWrapperStyle,
  MenuListWrapperStyle,
  SubMenuListStyle,
  MenuListStyle,
} = MenuStyle

type Props = {
  role?: string
  label?: string
  divider?: boolean
  mobile?: boolean
  index?: number
  arrowIcon?: React.ReactNode
  buttonHeight?: number
} & MenuStyleProps.MenuItemStyleProps

const SubMenu: React.FC<Props> = ({
  id,
  arrowIcon,
  children,
  label,
  index: currentIndex,
  buttonHeight,
  ...otherProps
}) => {
  const {
    selectedChild,
    expandedChild,
    expandedChildIndex,
    setExpandedChild,
    resetExpandedChild,
    onKeyDown,
    onClose,
    mobile,
  }: any = React.useContext(MenuContext)

  const subMenuRef = React.useRef<HTMLLIElement>(null)

  const expanded = expandedChild && currentIndex === expandedChildIndex
  const focused = currentIndex === selectedChild

  React.useEffect(() => {
    if (subMenuRef && subMenuRef.current && focused) {
      subMenuRef.current.focus()
    }
  }, [selectedChild])

  const handleOnClick = (collapse: boolean = false): any => {
    const nrOfChildren = React.Children.count(children)

    if (collapse || expandedChild) {
      resetExpandedChild()
    }
    if (!expandedChild || expandedChildIndex !== currentIndex) {
      setExpandedChild(nrOfChildren, currentIndex)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === KeyboardKeys.Enter) {
      handleOnClick()
    } else {
      onKeyDown(e)
    }
  }

  const clonedChildren = React.Children.map(children, (child, index) =>
    React.cloneElement(child as React.ReactElement<any>, {
      index: currentIndex && currentIndex + index + 1,
      height: 44,
    }),
  )

  const SubMenuListWrapper = mobile
    ? SubMenuListWrapperStyle
    : MenuListWrapperStyle
  const SubMenuList = mobile ? SubMenuListStyle : MenuListStyle

  return (
    <SubMenuWrapperStyle
      tabIndex={0}
      ref={subMenuRef}
      focused={expanded}
      onKeyDown={handleKeyPress}
      onBlur={() => setTimeout(onClose(subMenuRef), 200)}
      onMouseEnter={() => !mobile && setTimeout(() => handleOnClick(true), 200)}
      onMouseLeave={() => !mobile && setTimeout(handleOnClick, 200)}
      onClick={() => handleOnClick()}
      {...otherProps}
    >
      {label && (
        <MenuStyle.SubMenuButtonLabelStyle>
          {label}
        </MenuStyle.SubMenuButtonLabelStyle>
      )}
      {mobile && (
        <Icon inline size={24} padding={4} rotate={expanded ? 180 : 0}>
          {arrowIcon}
        </Icon>
      )}
      <SubMenuListWrapper aria-hidden={!expanded}>
        <SubMenuList top={buttonHeight} labelId={id}>
          {clonedChildren}
        </SubMenuList>
      </SubMenuListWrapper>
    </SubMenuWrapperStyle>
  )
}

SubMenu.defaultProps = {
  buttonHeight: 50,
}

export default SubMenu

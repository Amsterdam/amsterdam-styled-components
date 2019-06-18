import React from 'react'
import { ChevronDown } from '@datapunt/asc-assets'
import MenuStyle, { MenuStyleProps } from './index'
import { KeyboardKeys } from '../../types'
import { MenuContext } from './Menu'
import { Icon } from '../../index'
import { SubMenuItemStyle } from './MenuItemStyle'

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
  mobile?: boolean
  index?: number
  buttonHeight?: number
} & MenuStyleProps.MenuItemStyleProps

const defaultProps = {
  buttonHeight: 50,
  currentIndex: 1,
}

const SubMenu: React.FC<Props> = ({
  id,
  children,
  label,
  index: currentIndex = defaultProps.currentIndex,
  buttonHeight = defaultProps.buttonHeight,
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

  const subMenuRef = React.useRef<HTMLAnchorElement>(null)

  const expanded = expandedChild && currentIndex === expandedChildIndex
  const focused = currentIndex === selectedChild

  React.useEffect(() => {
    if (subMenuRef && subMenuRef.current && focused) {
      subMenuRef.current.focus()
    }
  }, [])

  React.useEffect(() => {
    if (subMenuRef && subMenuRef.current && focused && mobile) {
      subMenuRef.current.focus()
    }
  }, [selectedChild])

  const handleOnClick = (collapse: boolean = false): any => {
    const nrOfChildren = React.Children.count(children)

    if (collapse || expandedChild) {
      resetExpandedChild()
    }
    if (!collapse && (!expandedChild || expandedChildIndex !== currentIndex)) {
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
      index: currentIndex + index + 1,
      height: 44,
    }),
  )

  const css = mobile
    ? `
    padding: 0;
    flex-direction: column;
    border: 0;

    & > ${SubMenuItemStyle} {
      width: 100%;
      flex-direction: row;
    }
    `
    : ''

  const SubMenuButton = (
    <span>
      {label && (
        <MenuStyle.SubMenuButtonLabelStyle>
          {label}
        </MenuStyle.SubMenuButtonLabelStyle>
      )}
      {mobile && (
        <Icon inline size={24} padding={4} rotate={expanded ? 180 : 0}>
          <ChevronDown />
        </Icon>
      )}
    </span>
  )

  const SubMenuItem = mobile ? (
    <SubMenuItemStyle as="div" height={buttonHeight}>
      {SubMenuButton}
    </SubMenuItemStyle>
  ) : (
    SubMenuButton
  )

  const SubMenuListWrapper = mobile
    ? SubMenuListWrapperStyle
    : MenuListWrapperStyle
  const SubMenuList = mobile ? SubMenuListStyle : MenuListStyle

  return (
    <li tabIndex={-1}>
      <SubMenuWrapperStyle
        as="div"
        tabIndex={0}
        ref={subMenuRef}
        focused={expanded}
        css={css}
        onKeyDown={handleKeyPress}
        onClick={() => handleOnClick()}
        onFocus={() => !mobile && !expanded && handleOnClick()}
        onMouseEnter={() => !mobile && !expanded && handleOnClick()}
        onMouseLeave={() => !mobile && handleOnClick(true)}
        {...otherProps}
      >
        {SubMenuItem}
        <SubMenuListWrapper aria-hidden={!expanded}>
          <SubMenuList top={buttonHeight} labelId={id}>
            {clonedChildren}
          </SubMenuList>
        </SubMenuListWrapper>
      </SubMenuWrapperStyle>
    </li>
  )
}

export default SubMenu

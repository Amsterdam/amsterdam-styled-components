import React from 'react'
import { ChevronRight } from '@datapunt/asc-assets'
import MenuItemLabel from '../MenuItemLabel/MenuItemLabel'
import { useMenuContext } from '../MenuContext'
import useMenuFocus from '../useMenuFocus'
import MenuItemLinkStyle, {
  Props as MenuItemLinkStyleProps,
} from './MenuItemLinkStyle'
import Icon from '../../Icon'

export type Props = {
  element?: keyof JSX.IntrinsicElements
  linkIndex?: number
  ignoreCloseOnClick?: boolean
  onFocus?: (e: React.FocusEvent) => void
  setCurrentLinkRef?: Function
  iconRight?: React.ReactElement
  iconLeft?: React.ReactElement
} & MenuItemLinkStyleProps &
  React.HTMLProps<HTMLElement>

const MenuItemLink: React.FC<Props> = ({
  element,
  linkIndex,
  onFocus,
  setCurrentLinkRef,
  ignoreCloseOnClick,
  children,
  iconRight,
  isActive,
  iconLeft,
  onClick,
  ...otherProps
}) => {
  const ref = React.useRef<HTMLAnchorElement>(null!)
  const {
    setActiveChild,
    underFlyOutMenu,
    hasToggle,
    setOpenToggle,
  } = useMenuContext()

  useMenuFocus(ref, linkIndex)

  React.useEffect(() => {
    if (setCurrentLinkRef) {
      setCurrentLinkRef(ref)
    }
  }, [setCurrentLinkRef])

  const handleOnFocus = (e: React.FocusEvent) => {
    if (onFocus) {
      onFocus(e)
    }
    if (setActiveChild && linkIndex) {
      setActiveChild(linkIndex)
    }
  }

  const handleOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!ignoreCloseOnClick) {
      if (setOpenToggle) setOpenToggle(false)
    }
    if (onClick) onClick(e)
  }

  return (
    <MenuItemLinkStyle
      onFocus={handleOnFocus}
      // @ts-ignore
      ref={ref}
      isActive={isActive}
      tabIndex={0}
      {...(element ? { as: element } : {})}
      {...{ hasToggle, underFlyOutMenu }}
      {...otherProps}
      onClick={handleOnClick}
    >
      {!iconLeft && underFlyOutMenu && (
        <Icon size={14}>
          <ChevronRight />
        </Icon>
      )}
      {iconLeft && iconLeft}
      <MenuItemLabel>{children}</MenuItemLabel>
      {iconRight && iconRight}
    </MenuItemLinkStyle>
  )
}

export default MenuItemLink

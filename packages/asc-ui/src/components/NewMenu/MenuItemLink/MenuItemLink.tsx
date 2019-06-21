import React from 'react'
import { ChevronRight } from '@datapunt/asc-assets'
import MenuItemLabel from '../MenuItemLabel/MenuItemLabel'
import { useMenuContext } from '../MenuContext'
import useMenuFocus from '../useMenuFocus'
import MenuItemLinkStyle, {
  Props as MenuItemLinkStyleProps,
} from './MenuItemLinkStyle'
import Icon from '../../Icon'

type Props = {
  element?: keyof JSX.IntrinsicElements
  linkIndex?: number
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
  children,
  iconRight,
  isActive,
  iconLeft,
  ...otherProps
}) => {
  const ref = React.useRef<HTMLAnchorElement>(null!)
  const { setActiveChild, underFlyOutMenu, isToggleActive } = useMenuContext()

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

  return (
    <MenuItemLinkStyle
      onFocus={handleOnFocus}
      // @ts-ignore
      ref={ref}
      isActive={isActive}
      {...(element ? { as: element } : {})}
      {...{ isToggleActive, underFlyOutMenu }}
      {...otherProps}
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

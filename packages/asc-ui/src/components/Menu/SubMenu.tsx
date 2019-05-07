import React from 'react'
import MenuStyle, { MenuStyleProps } from '../../styles/components/MenuStyle'
import ChevronDown from '../../internals/ChevronDown/ChevronDown'
import { KeyboardKeys } from '../../types'
import { MenuContext } from './Menu'

type Props = {
  role?: string
  label?: string
  divider?: boolean
  mobile?: boolean
  index?: number
} & MenuStyleProps.MenuItemStyleProps

const SubMenu: React.FC<Props> = ({
  id,
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
    nrOfChildrenChild,
    setExpandedChild,
    handleOnKeyDown,
    mobile,
  }: any = React.useContext(MenuContext)

  const hasFocus = React.useCallback(() => {
    return (
      currentIndex === selectedChild ||
      (currentIndex === expandedChildIndex &&
        (selectedChild > expandedChildIndex &&
          selectedChild < expandedChildIndex + nrOfChildrenChild + 1))
    )
  }, [selectedChild])

  React.useEffect(() => {
    if (subMenuRef && subMenuRef.current) {
      if (hasFocus()) {
        subMenuRef.current.focus()
      } else {
        subMenuRef.current.blur()
      }
    }
  }, [selectedChild])

  const handleOnClick = (e: React.KeyboardEvent | React.MouseEvent) => {
    e.preventDefault()
    const nrOfChildren = React.Children.count(children)

    setExpandedChild(nrOfChildren, !expandedChild, currentIndex)
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
    })
  })

  return (
    <>
      <MenuStyle.SubMenuButtonStyle
        focused={hasFocus()}
        onClick={handleOnClick}
        onKeyDown={handleKeyPress}
        tabIndex={hasFocus() ? 0 : -1}
        ref={subMenuRef}
        {...otherProps}
      >
        {label && <span>{label}</span>}
        {mobile && <ChevronDown open={expandedChild} />}
      </MenuStyle.SubMenuButtonStyle>
      <MenuStyle.SubMenuListWrapperStyle
        aria-hidden={mobile ? !expandedChild : false}
      >
        <MenuStyle.SubMenuListStyle labelId={id}>
          {clonedChildren}
        </MenuStyle.SubMenuListStyle>
      </MenuStyle.SubMenuListWrapperStyle>
    </>
  )
}

export default SubMenu

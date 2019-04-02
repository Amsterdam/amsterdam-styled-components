import React from 'react'
import { AscCore } from '@datapunt/asc-core'
import { ReactComponent as ChevronTop } from '@datapunt/asc-assets/lib/Icons/Chevron-Top.svg'
import { ReactComponent as ChevronDown } from '@datapunt/asc-assets/lib/Icons/Chevron-Down.svg'
import { Icon } from '../..'

const MenuButton = ({
  id,
  label,
  orientation,
  icon,
  open,
  ...otherProps
}: any) => {
  const arrowIconDown = !open ? <ChevronDown /> : <ChevronTop />
  const arrowIconTop = !open ? <ChevronTop /> : <ChevronDown />
  return (
    <AscCore.Menu.MenuButton {...{ id }} {...otherProps}>
      {icon && icon}
      {label}
      <Icon inline size={24} padding={4}>
        {orientation === 'top' ? arrowIconTop : arrowIconDown}
      </Icon>
    </AscCore.Menu.MenuButton>
  )
}

export default MenuButton

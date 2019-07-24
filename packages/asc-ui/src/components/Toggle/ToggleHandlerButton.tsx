import React from 'react'
import { Close, Menu } from '@datapunt/asc-assets'
import Icon from '../Icon'
import ButtonToggle from '../ButtonToggle/ButtonToggleStyle'
import { ToggleHandlerProps } from './Toggle'

const ToggleHandlerButton: React.FC<ToggleHandlerProps> = ({
  iconOpen,
  iconClose,
  open,
  onClick,
}) => {
  const IconOpen = iconOpen || <Menu />
  const IconClose = iconClose || <Close />
  return (
    <ButtonToggle open={!!open} onClick={onClick}>
      <Icon>{open ? IconClose : IconOpen}</Icon>
    </ButtonToggle>
  )
}

export default ToggleHandlerButton

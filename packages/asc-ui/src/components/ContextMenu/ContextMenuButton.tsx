import React from 'react'
import ChevronDown from '../../internals/ChevronDown/ChevronDown'
import ContextMenuStyle from '../../styles/components/ContextMenuStyle'

const ContextMenuButton = ({
  id,
  label,
  position,
  icon,
  open,
  ...otherProps
}: any) => {
  return (
    <ContextMenuStyle.ContextMenuButtonStyle {...{ id }} {...otherProps}>
      {icon && icon}
      {label && <span>{label}</span>}
      <ChevronDown open={open} position={position} />
    </ContextMenuStyle.ContextMenuButtonStyle>
  )
}

export default ContextMenuButton

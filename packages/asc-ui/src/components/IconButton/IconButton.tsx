import React from 'react'
import { AscCore } from '@datapunt/asc-core'
import { Icon } from '../..'

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const IconButton: React.FC<Props & AscCore.Button.Props> = ({
  children,
  onClick,
  ...otherProps
}) => (
  <AscCore.Button.default onClick={onClick} {...otherProps} square>
    <Icon>{children}</Icon>
  </AscCore.Button.default>
)

export default IconButton

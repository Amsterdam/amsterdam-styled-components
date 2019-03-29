import React from 'react'
import { AscCore } from '@datapunt/asc-core'
import { Icon } from '../..'

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  iconSize?: number
}

const ShareButton: React.FC<Props & AscCore.Button.Props> = ({
  children,
  onClick,
  iconSize,
  ...otherProps
}) => (
  <AscCore.Button.ShareButton onClick={onClick} {...otherProps} square>
    <Icon color="secondary" size={iconSize}>
      {children}
    </Icon>
  </AscCore.Button.ShareButton>
)

export default ShareButton

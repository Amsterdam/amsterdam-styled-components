import React from 'react'
import { AscCore } from '@datapunt/asc-core'
import { Icon } from '../..'

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  alignIcon?: 'top' | 'bottom' | 'left' | 'right'
  iconSize?: number
}

const ShareButton: React.FC<Props & AscCore.Button.Props> = ({
  children,
  onClick,
  iconSize,
  alignIcon,
  ...otherProps
}) => (
  <AscCore.Button.ShareButton onClick={onClick} {...otherProps} square>
    <Icon alignSelf={alignIcon} color="secondary" size={iconSize}>
      {children}
    </Icon>
  </AscCore.Button.ShareButton>
)

export default ShareButton

import React from 'react'
import { AscCore } from '@datapunt/asc-core'
import { Icon } from '../..'

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const ShareButton: React.FC<Props & AscCore.Button.Props> = ({
  children,
  onClick,
  ...otherProps
}) => (
  <AscCore.Button.ShareButton onClick={onClick} {...otherProps} square>
    <Icon color="secondary" size={30}>
      {children}
    </Icon>
  </AscCore.Button.ShareButton>
)

export default ShareButton

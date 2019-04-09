import React from 'react'
import { AscCore } from '@datapunt/asc-core'
import StyledShareButton from './StyledShareButton'
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
  <StyledShareButton onClick={onClick} square {...otherProps}>
    <Icon color="secondary" size={iconSize}>
      {children}
    </Icon>
  </StyledShareButton>
)

export default ShareButton

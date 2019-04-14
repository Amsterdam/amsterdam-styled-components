import React from 'react'
import StyledShareButton from './StyledShareButton'
import { AscCore } from '../../styles'
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

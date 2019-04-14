import React from 'react'
import { Icon } from '../..'
import StyledShareButton, {
  Props as ShareButtonProps,
} from '../../styles/components/StyledShareButton'

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  iconSize?: number
} & ShareButtonProps

const ShareButton: React.FC<Props> = ({
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

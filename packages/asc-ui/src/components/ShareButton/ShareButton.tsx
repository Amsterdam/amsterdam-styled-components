import React from 'react'
import { Icon } from '../..'
import ShareButtonStyle, {
  Props as ShareButtonStyleProps,
} from './ShareButtonStyle'

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  iconSize?: number
} & ShareButtonStyleProps

const ShareButton: React.FC<Props> = ({
  children,
  onClick,
  iconSize,
  ...otherProps
}) => (
  <ShareButtonStyle onClick={onClick} square {...otherProps}>
    <Icon size={iconSize}>{children}</Icon>
  </ShareButtonStyle>
)

export default ShareButton

import React from 'react'
import { Icon } from '@datapunt/asc-ui'
import ShareButtonStyle, {
  Props as ShareButtonStyleProps,
} from './ShareButtonStyle'

type Props = {
  iconSize?: number
} & ShareButtonStyleProps &
  React.HTMLAttributes<HTMLButtonElement>

const ShareButton: React.FC<Props> = ({
  children,
  onClick,
  iconSize,
  ...otherProps
}) => (
  <ShareButtonStyle size={30} onClick={onClick} variant="blank" {...otherProps}>
    <Icon size={iconSize}>{children}</Icon>
  </ShareButtonStyle>
)

export default ShareButton

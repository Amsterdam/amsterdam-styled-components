import React from 'react'
import { Icon } from '../..'
import ShareButtonStyle, {
  Props as ShareButtonProps,
} from '../../styles/components/ShareButtonStyle'

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
  <ShareButtonStyle onClick={onClick} square {...otherProps}>
    <Icon color="secondary" size={iconSize}>
      {children}
    </Icon>
  </ShareButtonStyle>
)

export default ShareButton

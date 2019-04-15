import React from 'react'
import { IconStyle } from '../..'
import ShareButtonStyle, {
  ShareButtonStyleProps,
} from '../../styles/components/ShareButtonStyle'

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
    <IconStyle color="secondary" size={iconSize}>
      {children}
    </IconStyle>
  </ShareButtonStyle>
)

export default ShareButton

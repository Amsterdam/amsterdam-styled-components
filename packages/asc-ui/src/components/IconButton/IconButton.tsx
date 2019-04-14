import React from 'react'
import IconButtonStyle, {
  Props as IconButtonStyleProps,
} from '../../styles/components/IconButtonStyle'
import { IconStyle } from '../..'

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
} & IconButtonStyleProps

const IconButton: React.FC<Props> = ({ children, onClick, ...otherProps }) => (
  <IconButtonStyle onClick={onClick} {...otherProps} square>
    <IconStyle>{children}</IconStyle>
  </IconButtonStyle>
)

export default IconButton

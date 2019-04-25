import React from 'react'
import IconButtonStyle, {
  IconButtonStyleProps,
} from '../../styles/components/IconButtonStyle'
import { Icon } from '../..'

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
} & IconButtonStyleProps

const IconButton: React.FC<Props> = ({ children, onClick, ...otherProps }) => (
  <IconButtonStyle onClick={onClick} {...otherProps} square>
    <Icon>{children}</Icon>
  </IconButtonStyle>
)

export default IconButton

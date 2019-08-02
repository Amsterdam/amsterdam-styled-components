import React from 'react'
import IconButtonStyle, {
  Props as IconButtonStyleProps,
} from './IconButtonStyle'
import Icon from '../../Icon'

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
} & IconButtonStyleProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>

/**
 * @deprecated Use the Button component in combination with the Icon component
 */
const IconButton: React.FC<Props> = ({ children, onClick, ...otherProps }) => (
  <IconButtonStyle onClick={onClick} {...otherProps} square>
    <Icon>{children}</Icon>
  </IconButtonStyle>
)

export default IconButton

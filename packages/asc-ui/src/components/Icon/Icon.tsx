import React from 'react'
import IconStyle, { defaultProps, Props as IconStyleProps } from './IconStyle'

export { defaultProps }

export type Props = IconStyleProps

const Icon: React.FC<Props> = ({ children, ...otherProps }) => (
  <IconStyle {...otherProps}>{children}</IconStyle>
)

export default Icon

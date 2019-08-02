import React from 'react'
import IconStyle, { Props as IconStyleProps } from './IconStyle'

export type Props = IconStyleProps

const Icon: React.FC<Props> = ({ children, ...otherProps }) => (
  <IconStyle {...otherProps}>{children}</IconStyle>
)

export default Icon

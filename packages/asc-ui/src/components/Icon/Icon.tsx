import React from 'react'
import IconStyle, { IconStyleProps } from '../../styles/components/IconStyle'

type Props = IconStyleProps

const Icon: React.FC<Props> = ({ children, ...otherProps }) => (
  <IconStyle {...otherProps}>{children}</IconStyle>
)

export default Icon

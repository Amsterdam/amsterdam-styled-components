import React from 'react'
import ButtonBarStyle, { Props as ButtonBarStyleProps } from './ButtonBarStyle'

export type Props = ButtonBarStyleProps

/**
 *
 * @deprecated
 */
const ButtonBar: React.FC<Props> = ({ children, ...otherProps }) => (
  <ButtonBarStyle {...otherProps}>{children}</ButtonBarStyle>
)

export default ButtonBar

import React from 'react'
import ButtonBarStyle, { Props as ButtonBarStyleProps } from './ButtonBarStyle'

export type Props = ButtonBarStyleProps

const ButtonBar: React.FC<Props> = ({ children, ...otherProps }) => {
  return <ButtonBarStyle {...otherProps}>{children}</ButtonBarStyle>
}

ButtonBar.defaultProps = {
  padding: 5,
}

export default ButtonBar

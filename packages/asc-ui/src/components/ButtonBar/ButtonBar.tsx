import React from 'react'
import ButtonBarStyle, { Props as ButtonBarStyleProps } from './ButtonBarStyle'

export type Props = ButtonBarStyleProps

const ButtonBar: React.FC<{}> = ({ children }) => (
  <ButtonBarStyle padding={0}>{children}</ButtonBarStyle>
)

export default ButtonBar

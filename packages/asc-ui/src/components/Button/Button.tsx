import * as React from 'react'
import { ButtonStyled, Theme } from '@datapunt/asc-core'

type Props = {
  color: Theme.Color,
  size?: ButtonStyled.Size,
}

const Button: React.FC<Props> = ({ children, color, size }) => (
  <ButtonStyled.default color={color} size={size}>
    {children}
  </ButtonStyled.default>
)

export default Button

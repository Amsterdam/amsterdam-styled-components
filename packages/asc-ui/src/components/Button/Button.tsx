import * as React from 'react'
import { ButtonStyled } from '@datapunt/asc-core'

const Button: React.FC<ButtonStyled.Props> = ({ children, ...otherProps }) => (
  <ButtonStyled.default {...otherProps}>
    {children}
  </ButtonStyled.default>
)

export default Button

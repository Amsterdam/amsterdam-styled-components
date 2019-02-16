import * as React from 'react'
import { ButtonStyled, Theme } from '@amsterdam/asc-core'

interface Props {
  text: string,
  color: Theme.Color,
}

const Button = ({ text, color }: Props) => (
  <ButtonStyled color={color}>
    {text}
  </ButtonStyled>
)

export default Button

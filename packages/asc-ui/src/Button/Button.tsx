import * as React from 'react'
import { Button as ButtonStyled } from '@amsterdam/asc-core'

const Button = (props: any) => (
  <ButtonStyled {...props}>
    {props.text}!!
  </ButtonStyled>
)

export default Button

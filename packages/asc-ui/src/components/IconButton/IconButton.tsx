import React from 'react'
import { ButtonStyled } from '@datapunt/asc-core'
import { Button, Icon } from '..'

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const IconButton: React.FC<Props & ButtonStyled.Props> = ({ children, onClick, ...otherProps }) => (
  <Button onClick={onClick} {...otherProps} square>
    <Icon>
      {children}
    </Icon>
  </Button>
)

export default IconButton

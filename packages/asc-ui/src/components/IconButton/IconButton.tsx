import React from 'react'
import { AscCore } from '@datapunt/asc-core'
import { Button, Icon } from '../';

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const IconButton: React.FC<Props & AscCore.Button.Props> = ({ children, onClick, ...otherProps }) => (
  <Button onClick={onClick} {...otherProps} square>
    <Icon>
      {children}
    </Icon>
  </Button>
)

export default IconButton

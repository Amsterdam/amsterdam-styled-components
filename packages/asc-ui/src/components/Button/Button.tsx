import * as React from 'react'
import { AscCore } from '@datapunt/asc-core'

const Button: React.FC<AscCore.Button.Props> = ({
  children,
  ...otherProps
}) => (
  <AscCore.Button.default {...otherProps}>
    <span>{children}</span>
  </AscCore.Button.default>
)

export default Button

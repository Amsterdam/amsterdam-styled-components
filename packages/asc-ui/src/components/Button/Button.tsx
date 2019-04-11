import * as React from 'react'
import { AscCore } from '../../styles'

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

const Button: React.FC<Props & AscCore.Button.Props> = ({
  children,
  ...otherProps
}) => (
  <AscCore.Button.default {...otherProps}>{children}</AscCore.Button.default>
)

export default Button

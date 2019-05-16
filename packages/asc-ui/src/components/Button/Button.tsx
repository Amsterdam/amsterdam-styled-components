import * as React from 'react'
import ButtonStyle, { Props as ButtonStyleProps } from './ButtonStyle'

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
} & ButtonStyleProps

const Button: React.FC<Props> = ({ children, ...otherProps }) => (
  <ButtonStyle {...otherProps}>{children}</ButtonStyle>
)

export default Button

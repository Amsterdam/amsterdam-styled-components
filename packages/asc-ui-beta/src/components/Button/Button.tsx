import type { ElementType, ButtonHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import ButtonStyle from './ButtonStyle'

export type ButtonProps = {
  as?: ElementType
  variant?: 'primary' | 'secondary' | 'tertiary' | 'blank'
  small?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = forwardRef(
  ({ as = 'button', children, ...otherProps }: ButtonProps, ref) => (
    <ButtonStyle as={as} ref={ref} {...otherProps}>
      {children}
    </ButtonStyle>
  ),
)

export default Button

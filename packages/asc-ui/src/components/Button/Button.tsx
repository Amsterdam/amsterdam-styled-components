import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode,
} from 'react'
import { forwardRef } from 'react'
import Icon, { defaultProps as iconDefaultProps } from '../Icon/Icon'
import type { ButtonStyleProps } from './ButtonStyle'
import ButtonStyle, { ButtonVariant, IconLeft, IconRight } from './ButtonStyle'

export type ButtonProps = {
  as?: ElementType
  forwardedAs?: ElementType
  iconLeft?: ReactNode
  iconRight?: ReactNode
  icon?: ReactNode
  iconSize?: number
} & ButtonStyleProps &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>

export { ButtonVariant }

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ children, iconLeft, iconRight, icon, iconSize, ...otherProps }, ref) => {
    const iconProps = {
      size: iconSize || iconDefaultProps.size,
    }

    return (
      <ButtonStyle ref={ref} {...otherProps}>
        {iconLeft && <IconLeft {...iconProps}>{iconLeft}</IconLeft>}
        {icon ? <Icon {...iconProps}>{icon}</Icon> : children}
        {iconRight && <IconRight {...iconProps}>{iconRight}</IconRight>}
      </ButtonStyle>
    )
  },
)

export default Button

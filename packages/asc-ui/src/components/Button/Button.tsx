import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  forwardRef,
  ReactNode,
} from 'react'
import Icon, { defaultProps as iconDefaultProps } from '../Icon/Icon'
import ButtonStyle, {
  ArrowRight,
  ButtonStyleProps,
  ButtonVariant,
  IconLeft,
  IconRight,
} from './ButtonStyle'

export type ButtonProps = {
  as?: ElementType
  forwardedAs?: ElementType
  iconLeft?: ReactNode
  iconRight?: ReactNode
  icon?: ReactNode
  iconSize?: number
  taskflow?: boolean
} & ButtonStyleProps &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>

export { ButtonVariant }

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    { children, iconLeft, iconRight, icon, iconSize, taskflow, ...otherProps },
    ref,
  ) => {
    const iconProps = {
      size: iconSize || iconDefaultProps.size,
    }

    return (
      <ButtonStyle ref={ref} {...otherProps} taskflow={taskflow}>
        {iconLeft && <IconLeft {...iconProps}>{iconLeft}</IconLeft>}
        {icon ? <Icon {...iconProps}>{icon}</Icon> : children}
        {iconRight && <IconRight {...iconProps}>{iconRight}</IconRight>}
        {taskflow && <ArrowRight />}
      </ButtonStyle>
    )
  },
)

export default Button

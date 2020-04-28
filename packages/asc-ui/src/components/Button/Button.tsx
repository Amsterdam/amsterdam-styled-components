import React from 'react'
import Icon, { defaultProps as iconDefaultProps } from '../Icon/Icon'
import ButtonStyle, {
  ArrowRight,
  ButtonVariant,
  IconLeft,
  IconRight,
  Props as ButtonStyleProps,
} from './ButtonStyle'

export type Props = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  icon?: React.ReactNode
  iconSize?: number
  taskflow?: boolean
} & ButtonStyleProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>

export { ButtonVariant }

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
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

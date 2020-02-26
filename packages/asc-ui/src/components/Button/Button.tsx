import * as React from 'react'
import ButtonStyle, {
  IconLeft,
  IconRight,
  ArrowRight,
  Props as ButtonStyleProps,
  ButtonVariants,
} from './ButtonStyle'
import Icon, { defaultProps as iconDefaultProps } from '../Icon/Icon'

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

export { ButtonVariants }

const Button: React.FC<Props> = ({
  children,
  iconLeft,
  iconRight,
  icon,
  iconSize,
  taskflow,
  ...otherProps
}) => {
  const iconProps = {
    size: iconSize || iconDefaultProps.size,
  }
  return (
    <ButtonStyle {...otherProps} taskflow={taskflow}>
      {iconLeft && <IconLeft {...iconProps}>{iconLeft}</IconLeft>}
      {icon ? <Icon {...iconProps}>{icon}</Icon> : children}
      {iconRight && <IconRight {...iconProps}>{iconRight}</IconRight>}
      {taskflow && <ArrowRight />}
    </ButtonStyle>
  )
}

export default Button

import * as React from 'react'
import ButtonStyle, {
  IconLeft,
  IconRight,
  Props as ButtonStyleProps,
  ButtonVariants,
} from './ButtonStyle'
import Icon, { defaultProps as iconDefaultProps } from '../Icon/Icon'

export type Props = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  icon?: React.ReactNode
  iconSize?: number
  $as?: any
} & ButtonStyleProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>

export { ButtonVariants }

const Button: React.FC<Props> = ({
  children,
  iconLeft,
  iconRight,
  icon,
  iconSize,
  $as,
  ...otherProps
}): any => {
  const iconProps = {
    size: iconSize || iconDefaultProps.size,
  }
  return (
    <ButtonStyle {...otherProps} as={$as}>
      {iconLeft && <IconLeft {...iconProps}>{iconLeft}</IconLeft>}
      {icon ? <Icon {...iconProps}>{icon}</Icon> : children}
      {iconRight && <IconRight {...iconProps}>{iconRight}</IconRight>}
    </ButtonStyle>
  )
}

export default Button

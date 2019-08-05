import * as React from 'react'
import ButtonStyle, {
  IconLeft,
  IconRight,
  Props as ButtonStyleProps,
} from './ButtonStyle'
import Icon, { defaultProps as iconDefaultProps } from '../Icon/Icon'

type Props = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  icon?: React.ReactNode
  iconSize?: number
} & ButtonStyleProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<Props> = ({
  children,
  iconLeft,
  iconRight,
  icon,
  iconSize,
  ...otherProps
}) => {
  const iconProps = {
    size: iconSize || iconDefaultProps.size,
  }
  return (
    <ButtonStyle {...otherProps}>
      {iconLeft && <IconLeft {...iconProps}>{iconLeft}</IconLeft>}
      {icon ? <Icon {...iconProps}>{icon}</Icon> : children}
      {iconRight && <IconRight {...iconProps}>{iconRight}</IconRight>}
    </ButtonStyle>
  )
}

export default Button

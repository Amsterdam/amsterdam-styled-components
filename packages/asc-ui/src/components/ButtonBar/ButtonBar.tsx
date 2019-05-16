import React from 'react'
import ButtonBarStyle, { Props as ButtonBarStyleProps } from './ButtonBarStyle'

export type Props = {
  styledComponent?: any
} & ButtonBarStyleProps

const ButtonBar: React.FC<Props> = ({ children, styledComponent }) => {
  const ExtendedButtonBarStyle = styledComponent
  return <ExtendedButtonBarStyle padding={0}>{children}</ExtendedButtonBarStyle>
}

ButtonBar.defaultProps = {
  styledComponent: ButtonBarStyle,
}

export default ButtonBar
export { ButtonBarStyle }

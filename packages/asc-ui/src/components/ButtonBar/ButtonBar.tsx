import React from 'react'
import ButtonBarStyle, {
  ButtonBarStyleProps,
} from '../../styles/components/ButtonBarStyle'

export type Props = {
  styledComponent?: any
} & ButtonBarStyleProps

const ButtonBar: React.FC<Props> = ({ children, styledComponent }) => {
  const ExtendedButtonBarStyle = styledComponent
  return (
  <ExtendedButtonBarStyle padding={0}>{children}</ExtendedButtonBarStyle>
)}

ButtonBar.defaultProps = {
  styledComponent: ButtonBarStyle
}

export default ButtonBar
export {ButtonBarStyle}

import React from 'react'
import ButtonBarStyle, {
  Props as ButtonBarProps,
} from '../../styles/components/ButtonBarStyle'

export type Props = ButtonBarProps

const ButtonBar: React.FC<{}> = ({ children }) => (
  <ButtonBarStyle padding={0}>{children}</ButtonBarStyle>
)

export default ButtonBar

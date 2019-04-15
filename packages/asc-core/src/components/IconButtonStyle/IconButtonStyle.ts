import styled from '../../styled-components'
import ButtonBaseStyle, { ButtonBaseStyleProps } from '../ButtonBaseStyle'

export type Props = ButtonBaseStyleProps

export const IconButtonStyle = styled(ButtonBaseStyle)<Props>`
  padding: 5px;
  width: 30px;
  height: 30px;
`
export default IconButtonStyle

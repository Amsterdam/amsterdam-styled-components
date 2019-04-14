import styled from '../../styled-components'
import ButtonBaseStyle, { Props as ButtonBaseProps } from '../ButtonBaseStyle'

export type Props = ButtonBaseProps

export const IconButtonStyle = styled(ButtonBaseStyle)<Props>`
  padding: 5px;
  width: 30px;
  height: 30px;
`
export default IconButtonStyle

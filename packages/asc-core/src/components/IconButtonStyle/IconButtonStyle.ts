import { size } from 'polished'
import styled from '../../styled-components'
import ButtonBaseStyle, { ButtonBaseStyleProps } from '../ButtonBaseStyle'
import IconStyle from '../IconStyle/IconStyle'

export type Props = {
  iconSize?: number
} & ButtonBaseStyleProps

export const IconButtonStyle = styled(ButtonBaseStyle)<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  ${({ size: sizeProp }) =>
    sizeProp
      ? size(sizeProp)
      : `
  width: 30px;
  height: 30px;
  `}

  ${IconStyle} {
    ${({ iconSize }) => iconSize && size(iconSize)}
  }
`
export default IconButtonStyle

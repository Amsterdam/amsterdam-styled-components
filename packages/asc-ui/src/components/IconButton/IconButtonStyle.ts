import styled, { css } from '@datapunt/asc-core'
import { size } from 'polished'
import ButtonBaseStyle, {
  Props as ButtonBaseStyleProps,
} from '../Button/ButtonBaseStyle'
import IconStyle from '../Icon/IconStyle'

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
      : css`
          width: 30px;
          height: 30px;
        `}

  ${IconStyle} {
    ${({ iconSize }) => iconSize && size(iconSize)}
  }
`
export default IconButtonStyle

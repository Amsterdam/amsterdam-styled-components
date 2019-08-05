import styled from '@datapunt/asc-core'
import { size } from 'polished'
import IconStyle from '../../Icon/IconStyle'
import ButtonStyle, {
  Props as ButtonStyleProps,
} from '../../Button/ButtonStyle'

export type Props = {
  /**
   * @deprecated Please use the size prop instead.
   */
  iconSize?: number
} & ButtonStyleProps

export const IconButtonStyle = styled(ButtonStyle)<Props>`
  border: none;
  outline: none;
  padding: 0;

  ${IconStyle} {
    ${({ iconSize }) => iconSize && size(iconSize)}
  }
`
export default IconButtonStyle

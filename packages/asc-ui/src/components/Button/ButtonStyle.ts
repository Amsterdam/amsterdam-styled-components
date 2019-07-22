import styled, { css } from '@datapunt/asc-core'
import { readableColor } from 'polished'
import { color as getColor } from '../../utils'
import ButtonBaseStyle, {
  Props as ButtonBaseStyleProps,
} from './ButtonBaseStyle'
import IconStyle from '../Icon/IconStyle'

export type Props = ButtonBaseStyleProps

const ButtonStyle = styled(ButtonBaseStyle)<Props>`
  padding: 4px 10px 4px 10px;
  min-height: 36px;
  line-height: 1em;
  color: ${({ color, theme }) =>
    color
      ? readableColor(getColor(color)({ theme }))
      : getColor('primary')({ theme })};
  ${({ theme, color }) =>
    !color &&
    css`
      border: 1px solid ${getColor('primary')({ theme })};
    `}

  &:hover {
    ${({ theme, color }) =>
      !color &&
      css`
        outline: 1px solid ${getColor('primary')({ theme })};
      `}
  }

  & > ${/* sc-selector */ IconStyle}:first-child {
    margin-right: 5px;
  }

  & > ${/* sc-selector */ IconStyle}:last-child {
    margin-left: 5px;
  }
`

export default ButtonStyle

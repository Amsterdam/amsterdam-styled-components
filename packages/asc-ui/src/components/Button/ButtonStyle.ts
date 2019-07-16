import styled, { css } from '@datapunt/asc-core'
import { readableColor } from 'polished'
import { getColorFromTheme } from '../../utils'
import ButtonBaseStyle, {
  Props as ButtonBaseStyleProps,
} from './ButtonBaseStyle'
import IconStyle from '../Icon/IconStyle'

export type Props = ButtonBaseStyleProps

const ButtonStyle = styled(ButtonBaseStyle)<Props>`
  display: flex;
  justify-content: center;
  padding: 4px 10px 4px 10px;
  min-height: 36px;
  line-height: 1em;
  color: ${({ color, theme }) =>
    color
      ? readableColor(getColorFromTheme(theme, color))
      : getColorFromTheme(theme, 'primary')};
  ${({ theme, color }) =>
    !color &&
    css`
      border: 1px solid ${getColorFromTheme(theme, 'primary')};
    `}

  &:hover {
    ${({ theme, color }) =>
      !color &&
      css`
        outline: 1px solid ${getColorFromTheme(theme, 'primary')};
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

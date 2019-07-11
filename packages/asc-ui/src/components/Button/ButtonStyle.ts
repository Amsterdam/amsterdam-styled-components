import styled, { css } from '@datapunt/asc-core'
import { readableColor } from 'polished'
import { svgFill, getColorFromTheme } from '../../utils'
import ButtonBaseStyle, {
  Props as ButtonBaseStyleProps,
} from './ButtonBaseStyle'
import IconStyle from '../Icon/IconStyle'

export type Props = ButtonBaseStyleProps

const ButtonStyle = styled(ButtonBaseStyle)<Props>`
  display: flex;
  justify-content: center;
  padding: 0 10px 0 10px;
  min-height: 38px;
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

  /* stylelint-disable-next-line selector-type-no-unknown */
  & > ${IconStyle}:first-child {
    margin-right: 5px;
  }

  /* stylelint-disable-next-line selector-type-no-unknown */
  & > ${IconStyle}:last-child {
    margin-left: 5px;
  }

  & > svg {
    width: 30px;
    height: 30px;
    ${({ theme }) => svgFill('tint', 'level1')({ theme })};
  }
`

export default ButtonStyle

import type { StyledProps } from 'styled-components'
import styled, { css } from 'styled-components'
import { readableColor } from 'polished'
import type { Props as TypographyProps } from '../Typography/TypographyStyle'
import { themeColor, themeSpacing } from '../../utils'
import type { Theme } from '../../types'

export type Props = {
  colorType?: keyof Theme.ColorType
  colorSubtype?: keyof Theme.Tint
} & TypographyProps &
  StyledProps<any>

export default styled.span<Props>`
  margin-top: 0;
  display: inline-block;
  padding: ${themeSpacing(1)};
  ${({ theme, colorType, colorSubtype }) => css`
    background-color: ${themeColor(colorType, colorSubtype)({ theme })};
    color: ${readableColor(themeColor(colorType, colorSubtype)({ theme }))};
  `}
`

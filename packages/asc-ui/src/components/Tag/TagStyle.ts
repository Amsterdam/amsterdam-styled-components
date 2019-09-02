import styled, { css, styledComponents, Theme } from '@datapunt/asc-core'
import { readableColor } from 'polished'
import { Props as TypographyProps } from '../Typography/TypographyStyle'
import Typography from '../Typography'
import { themeColor } from '../../utils'

export type Props = {
  colorType?: keyof Theme.ColorType
  colorSubtype?: keyof Theme.Tint
} & TypographyProps &
  styledComponents.StyledProps<any>

export const TagStyleCSS = ({ colorType, colorSubtype, theme }: Props) => {
  const backgroundColor = themeColor(colorType, colorSubtype)({ theme })
  return css<Props>`
    margin-top: 0;
    display: block;
    padding: 4px;
    background: blue;
    width: fit-content;
    background-color: ${backgroundColor};
    color: ${readableColor(backgroundColor)};
  `
}

export default styled(Typography)<Props>`
  ${TagStyleCSS}
`

import styled, { css, styledComponents, Theme } from '@datapunt/asc-core'
import { readableColor } from 'polished'
import { Props as TypographyProps } from '../Typography/TypographyStyle'
import Typography from '../Typography'
import { getColorCode } from '../../utils'

export type Props = {
  colorVariant?: Theme.Tint | Theme.TypeLevel
} & TypographyProps &
  styledComponents.StyledProps<any>

export const TagStyleCSS = ({ colorVariant, theme }: Props) => {
  const backgroundColor = getColorCode(colorVariant)({ theme })

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

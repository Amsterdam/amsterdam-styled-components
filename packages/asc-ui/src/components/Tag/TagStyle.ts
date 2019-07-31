import styled, { css, styledComponents, Theme } from '@datapunt/asc-core'
import { readableColor } from 'polished'
import { Props as TypographyProps } from '../Typography/TypographyStyle'
import Typography from '../Typography'
import { color as getColor } from '../../utils'

export type Props = {
  backgroundColor?: keyof Theme.Tint | keyof Theme.TypeLevel
} & TypographyProps &
  styledComponents.StyledProps<any>

export const TagStyleCSS = ({ backgroundColor, theme }: any) => {
  const color: string = backgroundColor.startsWith('level')
    ? getColor('tint', backgroundColor)({ theme })
    : getColor(backgroundColor)({ theme })

  return css<Props>`
    margin-top: 0;
    display: block;
    padding: 4px;
    background: blue;
    width: fit-content;
    background-color: ${color};
    color: ${readableColor(color)};
  `
}

export default styled(Typography)<Props>`
  ${TagStyleCSS}
`

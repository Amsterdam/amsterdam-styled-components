import styled, { css } from 'styled-components'
import type { Props as TypographyProps } from '../Typography/TypographyStyle'
import Typography from '../Typography'

export type Props = TypographyProps

export const HeaderStyleCSS = css`
  margin-top: 0;

  color: green;
`

export default styled(Typography)<Props>`
  ${HeaderStyleCSS}
`

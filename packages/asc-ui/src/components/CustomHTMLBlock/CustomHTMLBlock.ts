import styled, { css } from '@datapunt/asc-core'
import { HeaderStyleCSS } from '../Typography/HeadingStyle'
import { LinkStyleCSS } from '../Typography/LinkStyle'
import { ParagraphStyleCSS } from '../Typography/ParagraphStyle'
import { getTypographyFromTheme } from '../../utils'

const ElementStyleMapping = {
  h1: HeaderStyleCSS,
  h2: HeaderStyleCSS,
  h3: HeaderStyleCSS,
  h4: HeaderStyleCSS,
  h5: HeaderStyleCSS,
  h6: HeaderStyleCSS,
  a: LinkStyleCSS,
  p: ParagraphStyleCSS,
}

export default styled.div`
  ${Object.entries(ElementStyleMapping).map(
    ([element, style]) => css`
      ${element} {
        ${({ theme }) => getTypographyFromTheme()({ as: element, theme })};
        ${style}
      }
    `,
  )}
`

import styled, { css } from '@datapunt/asc-core'
import { HeaderStyleCSS } from '../Heading/HeadingStyle'
import { DefaultLinkStyleCSS } from '../Link/LinkStyle'
import { ParagraphStyleCSS } from '../Paragraph/ParagraphStyle'
import { getTypographyFromTheme } from '../../utils'

const ElementStyleMapping = {
  h1: HeaderStyleCSS,
  h2: HeaderStyleCSS,
  h3: HeaderStyleCSS,
  h4: HeaderStyleCSS,
  h5: HeaderStyleCSS,
  h6: HeaderStyleCSS,
  a: DefaultLinkStyleCSS,
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

  img,
  video {
    max-width: 100%;
    margin: 24px auto;
    width: 100%;
  }
`

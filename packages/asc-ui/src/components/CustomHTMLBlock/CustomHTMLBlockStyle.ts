import styled, { css } from '@datapunt/asc-core'
import { HeaderStyleCSS } from '../Heading/HeadingStyle'
import { InlineLinkStyleCSS } from '../Link/LinkStyle'
import { ParagraphStyleCSS } from '../Paragraph/ParagraphStyle'
import { getTypographyFromTheme } from '../../utils'
import { BulletCSS, ListStyleCSS } from '../List/ListStyle'
import { ListItemStyleCSS } from '../List/ListItemStyle'
import { BlockquoteStyleCSS } from '../Blockquote/BlockquoteStyle'
import { OrderedListStyleCSS } from '../List/OrderedListStyle'

const ElementStyleMapping = {
  h1: HeaderStyleCSS,
  h2: HeaderStyleCSS,
  h3: HeaderStyleCSS,
  h4: HeaderStyleCSS,
  h5: HeaderStyleCSS,
  h6: HeaderStyleCSS,
  a: InlineLinkStyleCSS,
  p: ParagraphStyleCSS,
  blockquote: BlockquoteStyleCSS,
  // Default variant bullet when rendered in CustomHTMLBlock
  ul: css`
    ${ListStyleCSS}
    ${BulletCSS}
  `,
  ol: css`
    ${OrderedListStyleCSS}
  `,
  li: ListItemStyleCSS,
}

const CustomHTMLBlockStyle = styled.div`
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
  }
`

export default CustomHTMLBlockStyle

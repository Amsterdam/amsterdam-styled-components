import styled, { css } from 'styled-components'
import { getTypographyFromTheme } from '../../utils'
import { BlockquoteStyleCSS } from '../Blockquote/BlockquoteStyle'
import { HeaderStyleCSS } from '../Heading/HeadingStyle'
import { InlineLinkStyleCSS } from '../Link/LinkStyle'
import { ListItemStyleCSS } from '../List/ListItemStyle'
import { BulletCSS, ListStyleCSS } from '../List/ListStyle'
import { OrderedListStyleCSS } from '../List/OrderedListStyle'
import { ParagraphStyleCSS } from '../Paragraph/ParagraphStyle'

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

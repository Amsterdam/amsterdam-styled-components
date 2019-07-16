import styled, { css } from '@datapunt/asc-core'
import { stripUnit } from 'polished'
import BlogPostStyle, {
  BLOG_POST_MARGIN_TOP,
  Props as BlogPostStyleProps,
} from '../Blog/BlogPost/BlogPostStyle'
import { breakpoint } from '../../utils'
import BlogBodyStyle from '../Blog/BlogBody/BlogBodyStyle'
import { getTypographyValueFromProperty } from '../../utils/themeUtils'
import {
  BLOG_META_LINE_HEIGHT,
  BLOG_META_MARGIN_TOP,
} from '../Blog/BlogMetaList/BlogMetaListStyle'

export type Props = {} & BlogPostStyleProps

const BLOG_BODY_PADDING_TOP = 32

export default styled(BlogPostStyle)<Props>` 
  ${BlogBodyStyle} {
    ${({ image }) =>
      image &&
      css`
        @media screen and ${breakpoint('min-width', 'tabletM')} {
          padding: ${BLOG_BODY_PADDING_TOP}px 24px;
        }
      `}
    @media screen and ${breakpoint('min-width', 'tabletM')} {
      margin-top: ${({ image, theme }) =>
        image
          ? `${(BLOG_POST_MARGIN_TOP +
              BLOG_META_LINE_HEIGHT +
              BLOG_META_MARGIN_TOP +
              stripUnit(
                getTypographyValueFromProperty('h1', 'lineHeight', 'tabletS')({
                  theme,
                }),
              ) +
              BLOG_BODY_PADDING_TOP) *
              -1}px`
          : `0`};
    }
  }
`

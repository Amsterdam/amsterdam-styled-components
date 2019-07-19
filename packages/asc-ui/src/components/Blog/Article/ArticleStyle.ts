import styled, { css } from '@datapunt/asc-core'
import { stripUnit } from 'polished'
import { BLOG_POST_MARGIN_TOP } from '../BlogPost/BlogPostStyle'
import { breakpoint } from '../../../utils'
import BlogBodyStyle from '../BlogBody/BlogBodyStyle'
import { getTypographyValueFromProperty } from '../../../utils/themeUtils'
import {
  BLOG_META_LINE_HEIGHT,
  BLOG_META_MARGIN_TOP,
} from '../BlogMetaList/BlogMetaListStyle'
import BlogPost, { Props as BlogPostProps } from '../BlogPost/BlogPost'

export type Props = {} & BlogPostProps

const BLOG_BODY_PADDING_TOP = 32

export default styled(BlogPost)<Props>` 
  ${BlogBodyStyle} {
    ${({ image }) =>
      !!image &&
      css`
        @media screen and ${breakpoint('min-width', 'tabletM')} {
          padding: ${BLOG_BODY_PADDING_TOP}px 24px;
        }
      `}
    
    /* 
    Here we calculate how much the BlogBody needs to shift up by getting existing css values from:
    - The H1 line-height
    - the padding of the BlogBody
    - the BlogMeta margin-top and line-height
    */
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

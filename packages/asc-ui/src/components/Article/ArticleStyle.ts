import styled, { css } from '@datapunt/asc-core'
import BlogPostStyle from '../Blog/BlogPost/BlogPostStyle'
import { breakpoint } from '../../utils'
import BlogBodyStyle, {
  Props as BlogBodyStyleProps,
} from '../Blog/BlogBody/BlogBodyStyle'

export type Props = {} & BlogBodyStyleProps

export default styled(BlogPostStyle)<Props>` 
  ${BlogBodyStyle} {
    ${({ image }) =>
      image &&
      css`
        @media screen and ${breakpoint('min-width', 'tabletM')} {
          padding: 32px 24px;
        }
      `}
    @media screen and ${breakpoint('min-width', 'tabletM')} {
      margin-top: ${({ image }) =>
        image ? `${(54 + 17.5 + 20 + 38 + 32) * -1}px` : `0`};
    }
  }
`

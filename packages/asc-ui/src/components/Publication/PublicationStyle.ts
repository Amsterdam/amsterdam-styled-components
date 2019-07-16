import styled from '@datapunt/asc-core'
import { BlogPostStyle } from '../Blog/BlogPost'
import SummaryStyle from '../Typography/SummaryStyle'
import { color, breakpoint } from '../../utils'
import BlogContentStyle from '../Blog/BlogContent/BlogContentStyle'

export type Props = {}

export default styled(BlogPostStyle)<Props>`
  ${BlogContentStyle} {
    ${SummaryStyle} {
      margin: 0 0 24px;
      color: ${color('tint', 'level7')};

      @media screen and ${breakpoint('max-width', 'laptopM')} {
        margin: 0 0 20px;
      }
    }
  }
`

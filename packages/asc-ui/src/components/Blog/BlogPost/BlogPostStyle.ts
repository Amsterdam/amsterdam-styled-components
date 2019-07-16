import styled, { css } from '@datapunt/asc-core'
import { breakpoint, color } from '../../../utils'
import BackgroundImageStyle from '../../BackgroundImage/BackgroundImageStyle'
import BlogContentStyle from '../BlogContent/BlogContentStyle'

export type Props = {
  image?: string
}

export const BLOG_POST_MARGIN_TOP = 54

export default styled.section<Props>`
  width: 100%;
  color: ${color('tint', 'level6')};
  background-color: ${color('tint', 'level1')};
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and ${breakpoint('min-width', 'tabletM')} {
    margin-top: ${BLOG_POST_MARGIN_TOP}px;
    margin-bottom: 70px;
  }

  ${({ image }) =>
    image &&
    css`
      margin-top: 0;

      ${BlogContentStyle} {
        margin-top: 20px;
        @media screen and ${breakpoint('min-width', 'tabletM')} {
          margin-top: ${BLOG_POST_MARGIN_TOP}px;
        }
      }
    `}

  ${BackgroundImageStyle} {
    max-height: 560px;
    min-height: 250px;
  }
`

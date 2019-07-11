import styled from '@datapunt/asc-core'
import BackgroundImageStyle from '../BackgroundImage/BackgroundImageStyle'
import BlogContentStyle from './BlogContent/BlogContentStyle'
import { color, breakpoint } from '../../utils'
import {
  ARTICLE_PADDING_TOP_DESKTOP,
  ARTICLE_PADDING_TOP_MOBILE,
  BG_IMAGE_MARGIN_BOTTOM,
} from './constants'

export type Props = {
  image?: string
}

export default styled.article<Props>`
  width: 100%;
  margin: ${({ image }) => !image && `${ARTICLE_PADDING_TOP_MOBILE * -1}px`}
    auto 0;
  color: ${color('tint', 'level6')};
  background-color: ${color('tint', 'level1')};

  ${BackgroundImageStyle} {
    max-height: 560px;
    min-height: 250px;
    @media screen and ${breakpoint('min-width', 'tabletM')} {
      margin-bottom: ${BG_IMAGE_MARGIN_BOTTOM}px;
    }
  }

  ${BlogContentStyle} {
    @media screen and ${breakpoint('min-width', 'tabletM')} {
      margin-top: ${({ image }) =>
        image
          ? `${(BG_IMAGE_MARGIN_BOTTOM + 17.5 + 20 + 38 + 32) * -1}px`
          : `${ARTICLE_PADDING_TOP_DESKTOP * -1}px`};
    }
  }
`

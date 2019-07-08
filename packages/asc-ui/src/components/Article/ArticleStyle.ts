import styled, { css } from '@datapunt/asc-core'
import BackgroundImageStyle from '../BackgroundImage/BackgroundImageStyle'
import ArticleContentStyle from './ArticleContent/ArticleContentStyle'
import { color, breakpoint } from '../../utils'

export type Props = {
  image?: string
}

export default styled.article<Props>`
  width: 100%;
  margin: 0 auto;
  color: ${color('tint', 'level6')};
  background-color: ${color('tint', 'level1')};

  ${BackgroundImageStyle} {
    max-height: 560px;
    min-height: 250px;
  }

  ${ArticleContentStyle} {
    @media screen and ${breakpoint('min-width', 'laptop')} {
      ${({ image }) =>
        image &&
        css`
          margin-top: -106px;
        `}
    }
  }

  img,
  video {
    max-width: 100%;
    margin: 24px auto;
  }
`

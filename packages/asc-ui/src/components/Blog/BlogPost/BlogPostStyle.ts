import styled, { css } from '@datapunt/asc-core'
import { breakpoint, color } from '../../../utils'
import BackgroundImageStyle from '../../BackgroundImage/BackgroundImageStyle'
import BlogContentStyle from '../BlogContent/BlogContentStyle'

export type Props = {
  image?: string
}

export default styled.section<Props>`
  width: 100%;
  color: ${color('tint', 'level6')};
  background-color: ${color('tint', 'level1')};
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and ${breakpoint('min-width', 'tabletM')} {
    margin-top: 54px;
    margin-bottom: 70px;
  }

  ${({ image }) =>
    image &&
    css`
      margin-top: 0;

      ${BlogContentStyle} {
        margin-top: 20px;
        @media screen and ${breakpoint('min-width', 'tabletM')} {
          margin-top: 54px;
        }
      }
    `}

  ${BackgroundImageStyle} {
    max-height: 560px;
    min-height: 250px;
  }
`

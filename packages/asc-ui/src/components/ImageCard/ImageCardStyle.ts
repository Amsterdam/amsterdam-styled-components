import styled, { css } from '@datapunt/asc-core'
import { perceivedLoading } from '../../utils/themeUtils'
import { ImageCardContentStyle } from './ImageCardContent'

export type Props = {
  backgroundImage: string
  isLoading?: boolean
  animateLoading?: boolean
}

export type WrapperProps = {
  margin?: number
}

export const ImageCardWrapperStyle = styled.div<WrapperProps>`
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin}px;
    `}
`

export default styled.div<Props>`
  padding-top: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  overflow: hidden;
  ${({ isLoading, theme, animateLoading, backgroundImage }) =>
    isLoading
      ? css`
          ${perceivedLoading(theme, animateLoading)}
          ${ImageCardContentStyle} {
            height: 100px;
            width: 100%;

            & > * {
              display: none;
            }

            &::before {
              content: '';
              display: block;
              width: calc(100% - 30px);
              height: 30px;
              ${perceivedLoading(theme, animateLoading)}
            }
          }
        `
      : css`
          background-image: url(${backgroundImage});
        `}

  &::before {
    content: '';
    width: 0;
    height: 0;
    border-width: 22px;
    border-color: transparent;
    position: absolute;
    border-style: solid;
    right: 0;
    bottom: 0;
    border-bottom-color: white;
    border-right-color: white;
  }
`

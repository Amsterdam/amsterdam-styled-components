import styled, { css } from '@datapunt/asc-core'

export type Props = {
  square?: boolean
} & React.ImgHTMLAttributes<HTMLImageElement>

export default styled.img<Props>`
  width: 100%;

  ${({ square }) =>
    square &&
    css`
      height: 100%;
      // Polyfill for IE11 from 'objectFitPolyfill'
      object-fit: cover;
    `}
`

import styled, { css } from '@datapunt/asc-core'

export type Props = {
  square?: boolean
}

export default styled.img<Props>`
  width: 100%;
  ${({ square }) =>
    square &&
    css`
      height: 100%;
      object-fit: cover;
    `}
`

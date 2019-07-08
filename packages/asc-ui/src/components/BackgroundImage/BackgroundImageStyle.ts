import styled, { css } from '@datapunt/asc-core'
import { clearFix } from 'polished'

export type Props = {
  src: string
  position?: string
  aspectRatio?: number
  repeat?: string
  size?: string
}

export default styled.div<Props>`
  width: 100%;
  background-image: url(${({ src }) => src});
  background-repeat: ${({ repeat }) => repeat};
  background-position: ${({ position }) => position};
  background-size: ${({ size }) => size};
  ${({ aspectRatio }) =>
    aspectRatio &&
    css`
      &::before {
        content: '';
        width: 1px;
        margin-left: -1px;
        float: left;
        height: 0;
        padding-top: ${aspectRatio}%;
      }
    `}

  ${clearFix()}
`

import styled, { Theme } from '@datapunt/asc-core'

export type Props = {
  color?: Theme.TypeLevel
  size?: number
  css?: any
}

const SpinnerStyle = styled.div<Props>`
  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  & svg {
    animation: rotating 1s linear infinite;
  }
`

export default SpinnerStyle

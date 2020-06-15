import styled from 'styled-components'
import { CustomCssPropsType } from '../../utils'
import { ThemeFn } from '../../utils/themeUtils'

export type Props = {
  color?: string | ThemeFn<string>
  size?: number
} & CustomCssPropsType

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

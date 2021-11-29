import styled from 'styled-components'
import type { CustomCssPropsType } from '../../utils'
import type { ThemeFn } from '../../utils/themeUtils'

export type Props = {
  color?: string | ThemeFn<string>
  size?: number
} & CustomCssPropsType

const SpinnerStyle = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['size', 'color'].includes(prop) && defaultValidatorFn(prop),
})<Props>`
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

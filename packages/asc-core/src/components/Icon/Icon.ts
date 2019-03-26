import { Theme } from '../../theme'
import styled from '../../styled-components'
import fillSVG from '../../utils/fillSVG'

type Props = {
  color?: Theme.TypeLevel
  iconUrl?: string
  size?: number | 20
}

const Icon = styled.span<Props>`
  display: block;
  ${({ iconUrl }) => iconUrl && `background-image: ${iconUrl}`}
  ${({ size }) => size && `width: ${size}px; height: ${size}px;`}

  & > svg {
    width: inherit;
    height: inherit;
    ${({ color, theme }) => fillSVG(theme, color)};
`

export default Icon

import { Theme, THEME_NAME } from '../../theme'
import styled from '../../styled-components'
import fillSVG from '../../utils/fillSVG'

type Props = {
  color?: Theme.TypeLevel
  alignSelf?: 'top' | 'bottom' | 'left' | 'right'
  iconUrl?: string
  size?: number
}

const Icon = styled.span<Props>`
  display: block;
  ${({ iconUrl }) => iconUrl && `background-image: ${iconUrl}`}
  ${({ size }) => `width: ${size}px; height: ${size}px;`}
  ${({ alignSelf }) => alignSelf && `position: absolute; ${[alignSelf]}: 0`};

  & > svg {
    width: inherit;
    height: inherit;
    ${({ color, theme }) => fillSVG(theme[THEME_NAME], color)};
`

Icon.defaultProps = {
  size: 20,
}

export default Icon

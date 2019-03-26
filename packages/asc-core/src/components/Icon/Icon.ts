import { readableColor } from 'polished'
import { Theme } from '../../theme'
import styled from '../../styled-components'
import getThemeColor from '../../utils/getThemeColor'

type Props = {
  color?: Theme.TypeLevel
  iconUrl?: string
  size?: number
}

const Icon = styled.span<Props>`
  display: block;
  ${({ iconUrl }) => iconUrl && `background-image: ${iconUrl}`}
  ${({ size }) =>
    size
      ? `width: ${size}px; height: ${size}px;`
      : `width: 20px; height: 20px;`}

  & > svg {
    width: inherit;
    height: inherit;
    polygon,
    path {
      fill: ${({ color, theme }) => readableColor(getThemeColor(theme, color))};
    }
  }
`

export default Icon

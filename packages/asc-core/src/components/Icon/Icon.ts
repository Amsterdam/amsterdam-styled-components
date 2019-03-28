import { readableColor } from 'polished'
import { Theme } from '../../theme'
import styled from '../../styled-components'
import getThemeColor from '../../utils/getThemeColor'

type Props = {
  color?: Theme.TypeLevel
  iconUrl?: string
}

const Icon = styled.span<Props>`
  display: block;
  ${({ iconUrl }) => iconUrl && `background-image: ${iconUrl}`}
  width: 20px;
  height: 20px;

  & > svg {
    polygon,
    path {
      fill: ${({ color, theme }) => readableColor(getThemeColor(theme, color))};
    }
  }
`

export default Icon

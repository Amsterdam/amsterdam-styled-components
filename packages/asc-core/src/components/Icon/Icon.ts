import { Theme } from '../../theme'
import styled from '../../styled-components'
import getThemeColor from '../../utils/getThemeColor'
import { readableColor } from 'polished'

type Props = {
  color?: Theme.TypeLevel,
  iconUrl?: string,
}

const Icon = styled.span<Props>`
  display: block;
  ${({ iconUrl }) => iconUrl && `background-image: ${iconUrl}`}
  width: 16px;
  height: 16px;

  & > svg {
  width: 16px;
  height: 16px;
    polygon,
    path {
      fill: ${({ color, theme }) => readableColor(getThemeColor(theme, color))};
    }
  }
`

export default Icon

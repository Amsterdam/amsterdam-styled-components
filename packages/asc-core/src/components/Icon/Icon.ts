import { Theme } from '../../theme'
import styled from '../../styled-components'
import getThemeColor from '../../utils/getThemeColor'

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
      fill: ${({ theme }) => getThemeColor(theme, Theme.TypeLevel.primary)};
    }
  }
`

export default Icon

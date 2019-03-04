import { Theme } from '../../theme'
import styled from '../../styled-components'
import getThemeColor from '../../utils/getThemeColor'

type Props = {}

const TopBar = styled.div<Props>`
  display: 'block';
  z-index: 0;
  padding: 0 15px;
  border-bottom: 1px solid ${({ theme }) => getThemeColor(theme, Theme.TypeLevel.tint, 'level6')}
`

export default TopBar

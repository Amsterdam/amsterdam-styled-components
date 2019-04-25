import styled from '../../styled-components'
import { flexboxMinHeightFix } from '../shared/ie-fixes'
import { getColorFromTheme } from '../../utils'

export type Props = {
  backgroundColor?: string
}

const TopBarStyle = styled.header<Props>`
  display: flex;
  position: relative;
  align-items: center;
  z-index: 0;
  min-height: 54px;
  padding: 0 15px;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || getColorFromTheme(theme, 'bright', 'main')};
  ${flexboxMinHeightFix()};
`

export default TopBarStyle

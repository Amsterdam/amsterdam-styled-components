import styled from 'styled-components'
import { flexboxMinHeightFix } from '../shared/ie-fixes'
import { breakpoint, themeColor } from '../../utils'
import HeadingStyle from '../Heading/HeadingStyle'

export interface Props {
  backgroundColor?: string
}

const TopBarStyle = styled.header<Props>`
  display: flex;
  position: relative;
  align-items: center;
  padding: 0 10px;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || themeColor('tint', 'level1')({ theme })};
  ${flexboxMinHeightFix()};

  @media screen and ${breakpoint('min-width', 'tabletS')} {
    padding: 0 15px;
  }

  ${HeadingStyle} {
    flex-grow: 1;
    margin-bottom: 0;
  }
`

export default TopBarStyle

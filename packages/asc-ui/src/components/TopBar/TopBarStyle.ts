import styled from '@datapunt/asc-core'
import { flexboxMinHeightFix } from '../shared/ie-fixes'
import { breakpoint, color } from '../../utils'
import HeadingStyle from '../Heading/HeadingStyle'

export type Props = {
  backgroundColor?: string
}

const TopBarStyle = styled.header<Props>`
  display: flex;
  position: relative;
  align-items: center;
  z-index: 0;
  padding: 0 10px;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || color('tint', 'level1')({ theme })};
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

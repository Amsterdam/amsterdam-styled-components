import styled from 'styled-components'
import { breakpoint, themeColor } from '../../../utils'

export type Props = {}

export default styled.div<Props>`
  background-color: ${themeColor('tint', 'level5')};
  padding-top: 32px;

  @media screen and ${breakpoint('min-width', 'tabletM')} {
    padding-bottom: 24px;
  }
`

import styled from '@datapunt/asc-core'
import { breakpoint, color } from '../../../utils'

export type Props = {}

export default styled.div<Props>`
  background-color: ${color('tint', 'level5')};
  padding-top: 32px;

  @media screen and ${breakpoint('min-width', 'tabletM')} {
    padding-bottom: 24px;
  }
`

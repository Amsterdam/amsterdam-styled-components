import styled from '@datapunt/asc-core'
import { breakpoint } from '../../../utils'

export default styled.div`
  margin: auto;
  padding: 20px 0;
  background-color: white;
  width: 100%;

  @media screen and ${breakpoint('min-width', 'laptop')} {
    padding: 32px 24px;
  }
`

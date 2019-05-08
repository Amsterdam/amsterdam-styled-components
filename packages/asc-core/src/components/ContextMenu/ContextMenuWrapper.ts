import styled from '../../styled-components'
import { ContextMenu } from './types'

const Wrapper = styled.div<ContextMenu.WrapperProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  [aria-hidden='true'] {
    display: none;
  }
`

export default Wrapper

import styled from '../../styled-components'
import { ContextMenuWrapperStyleProps } from './types'

const ContextMenuWrapperStyle = styled.div<ContextMenuWrapperStyleProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  [aria-hidden='true'] {
    display: none;
  }
`

export default ContextMenuWrapperStyle

import styled from '@datapunt/asc-core'
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

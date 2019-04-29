import styled from '../../styled-components'
import { ContextMenuStyleProps } from './types'

const ContextMenuWrapperStyle = styled.div<
  ContextMenuStyleProps.ContextMenuWrapperStyleProps
>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  [aria-hidden='true'] {
    display: none;
  }
`

export default ContextMenuWrapperStyle

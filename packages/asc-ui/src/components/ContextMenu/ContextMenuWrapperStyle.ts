import styled from '@datapunt/asc-core'

const ContextMenuWrapperStyle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  [aria-hidden='true'] {
    display: none;
  }
`

export default ContextMenuWrapperStyle

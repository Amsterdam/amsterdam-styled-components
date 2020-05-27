import styled from 'styled-components'

const ContextMenuWrapperStyle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;

  [aria-hidden='true'] {
    display: none;
  }
`

export default ContextMenuWrapperStyle

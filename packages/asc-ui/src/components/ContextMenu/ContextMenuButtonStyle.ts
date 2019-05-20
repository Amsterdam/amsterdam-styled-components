import styled from '@datapunt/asc-core'
import { color, focusStyle } from '../../utils'

const ContextMenuButtonStyle = styled.button`
  ${focusStyle()}
  display: flex;
  background-color: ${color('tint', 'level1')};
  align-items: center;
  height: 32px;
  padding: 0 6px;
  justify-content: space-between;

  & > span:not(:last-child) {
    margin-right: 6px;
  }
`

export default ContextMenuButtonStyle

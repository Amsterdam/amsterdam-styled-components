import styled from 'styled-components'
import { themeColor, focusStyleOutline } from '../../utils'

const ContextMenuButtonStyle = styled.button`
  ${focusStyleOutline()}
  display: flex;
  background-color: ${themeColor('tint', 'level1')};
  align-items: center;
  height: 32px;
  padding: 0 6px;
  justify-content: space-between;

  & > span:not(:last-child) {
    margin-right: 6px;
  }
`

export default ContextMenuButtonStyle

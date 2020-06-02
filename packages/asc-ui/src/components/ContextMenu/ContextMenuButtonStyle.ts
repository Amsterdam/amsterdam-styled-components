import styled from 'styled-components'
import { themeColor, focusStyleOutline, themeSpacing } from '../../utils'

const ContextMenuButtonStyle = styled.button`
  cursor: pointer;
  display: flex;
  background-color: ${themeColor('tint', 'level1')};
  align-items: center;
  height: 32px;
  padding: ${themeSpacing(0, 2)};
  justify-content: space-between;
  z-index: 1;
  border: 1px solid;
  ${focusStyleOutline()}

  & > span:not(:last-child) {
    margin-right: ${themeSpacing(2)};
  }
`

export default ContextMenuButtonStyle

import styled from '../../styled-components'
import { getColorFromTheme, focusStyle } from '../../utils'

const ContextMenuButton = styled.button`
  ${focusStyle()}
  display: flex;
  background-color: ${({ theme }) =>
    getColorFromTheme(theme, 'tint', 'level1')};
  align-items: center;
  height: 32px;
  padding: 0 6px;
  justify-content: space-between;

  & > span:not(:last-child) {
    margin-right: 6px;
  }
`

export default ContextMenuButton

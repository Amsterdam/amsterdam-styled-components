import styled from '../../styled-components'
import focus from '../shared/focus'
import { Icon } from '..'

const ContextMenuButton = styled.button`
  ${({ theme }) => focus(theme)}
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 4px;
  justify-content: space-between;

  ${Icon}:not(:first-child):last-child {
    margin-left: 4px;
  }
`

export default ContextMenuButton

import styled from '../../styled-components'
import focus from '../shared/focus'
import { getColorFromTheme } from '../../utils'
import { Icon } from '..'

const MenuButtonStyle = styled.button`
  ${({ theme }) => focus(theme)}
  display: flex;
  background-color: ${({ theme }) =>
    getColorFromTheme(theme, 'tint', 'level1')};
  align-items: center;
  height: 32px;
  padding: 0 4px;
  justify-content: space-between;

  ${Icon}:last-child:not(:first-child) {
    margin-left: 4px;
  }
`

export default MenuButtonStyle

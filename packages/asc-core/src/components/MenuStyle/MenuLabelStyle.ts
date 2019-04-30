import styled from '../../styled-components'
import { getColorFromTheme } from '../../utils'

const MenuLabelStyle = styled.li`
  height: 42px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  line-height: 22px;

  font-weight: bold;

  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) =>
    getColorFromTheme(theme, 'tint', 'level3')}};

  border-left-style: solid;
  border-left-color: ${({ theme }) =>
    getColorFromTheme(theme, 'tint', 'level2')}};
  border-left-width: 4px;
`

export default MenuLabelStyle

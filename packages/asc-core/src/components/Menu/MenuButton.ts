import styled from '../../styled-components'
import focus from '../shared/focus'
import { Icon } from '..'

export type MenuButtonProps = {
  id: string
}

const MenuButton = styled.button.attrs<MenuButtonProps>(() => ({
  type: 'button',
}))`
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

export default MenuButton

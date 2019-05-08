import styled from '../../styled-components'
import { MenuStyleProps } from './types'

const MenuWrapperStyle = styled.div<MenuStyleProps.MenuWrapperStyleProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  [aria-hidden='true'] {
    display: none;
  }
`

export default MenuWrapperStyle

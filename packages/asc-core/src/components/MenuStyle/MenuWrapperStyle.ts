import styled from '../../styled-components'
import { MenuStyleProps } from './types'

const WrapperStyle = styled.div<MenuStyleProps.WrapperStyleProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  [aria-hidden='true'] {
    display: none;
  }
`

export default WrapperStyle

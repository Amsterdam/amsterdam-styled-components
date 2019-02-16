import styled from '../../styled-components'
import { THEME_NAME } from '../../theme'

const Input = styled.input.attrs({
  type: 'text',
})`
  appearance: none;
  box-shadow: inset 0 0 0 1px ${props => props.theme[THEME_NAME].colors.primary};
  font-size: 1rem;
  border: 0;
  border-radius: 0;
  box-sizing: border-box;
  padding: 11px 10px;
  width: 100%;
`

export default Input

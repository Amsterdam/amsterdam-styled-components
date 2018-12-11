import styled from 'styled-components'

const Input = styled.input.attrs({
  type: 'text',
})`
  appearance: none;
  box-shadow: inset 0 0 0 1px #767676;
  font-size: 1rem;
  border: 0;
  border-radius: 0;
  box-sizing: border-box;
  padding: 11px 10px;
  width: 100%;
`

export default Input

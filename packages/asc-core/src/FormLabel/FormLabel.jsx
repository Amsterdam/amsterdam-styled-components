import styled from 'styled-components'

const FL = styled.label.attrs({
  type: 'text',
})`
  color: ${props => props.error ? 'red' : 'white'};
  marginBottom: '5px';
`

export default FL

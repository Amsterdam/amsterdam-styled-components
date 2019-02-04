import styled from 'styled-components'

const RadioGroup = styled.div`
  display: ${(props) => props.orientation === 'horizontal' ? 'inline-block' : 'block'};
`

export default RadioGroup

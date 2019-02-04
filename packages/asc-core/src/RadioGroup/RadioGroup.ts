import styled from 'styled-components'
import RadioItem from '../RadioItem'

const RadioGroup = styled.div`
  ${RadioItem} {
    display: ${(props) => props.orientation === 'horizontal' ? 'inline-block' : 'block'};
    margin-right: ${(props) => props.orientation === 'horizontal' ? '24px' : '0'};
  }
`

export default RadioGroup

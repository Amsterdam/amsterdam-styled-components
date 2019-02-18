import styled from '../../styled-components'
import RadioItem from '../RadioItem'

interface Props {
  orientation?: string
}

const RadioGroup = styled.div<Props>`
  ${RadioItem} {
    display: ${props => (props.orientation === 'horizontal' ? 'inline-block' : 'block')};
    margin-right: ${props => (props.orientation === 'horizontal' ? '24px' : '0')};
  }
`

export default RadioGroup

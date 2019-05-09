import styled from '../../styled-components'
import RadioItemStyle from './RadioItemStyle'

type Props = {
  orientation?: string
}

const RadioGroupStyle = styled.div<Props>`
  ${RadioItemStyle} {
    display: ${props =>
      props.orientation === 'horizontal' ? 'inline-block' : 'block'};
    margin-right: ${props =>
      props.orientation === 'horizontal' ? '24px' : '0'};
  }
`

export default RadioGroupStyle

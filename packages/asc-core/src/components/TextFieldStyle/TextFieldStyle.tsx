import styled from '../../styled-components'
import IconButtonStyle from '../IconButtonStyle'

const TextFieldStyle = styled.div`
  position: relative;

  & > ${IconButtonStyle} {
    position: absolute;
    top: 5px;
    right: 5px;
  }
`

export default TextFieldStyle

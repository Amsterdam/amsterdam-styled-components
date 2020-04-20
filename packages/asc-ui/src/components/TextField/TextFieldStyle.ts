import styled from 'styled-components'
import ButtonStyle from '../Button/ButtonStyle'

const TextFieldStyle = styled.div`
  position: relative;

  & > ${ButtonStyle} {
    position: absolute;
    top: 5px;
    right: 5px;
  }
`

export default TextFieldStyle

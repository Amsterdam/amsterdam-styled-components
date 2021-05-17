import styled from 'styled-components'
import ButtonStyle from '../Button/ButtonStyle'

const TextFieldStyle = styled.div`
  position: relative;

  & > ${ButtonStyle} {
    position: absolute;
    top: 3px;
    right: 3px;
    height: calc(100% - 6px);
  }
`

export default TextFieldStyle

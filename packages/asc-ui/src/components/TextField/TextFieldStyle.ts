import styled from '@datapunt/asc-core'
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

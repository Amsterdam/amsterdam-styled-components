import styled from '@datapunt/asc-core'
import IconButtonStyle from '../IconButton/IconButtonStyle'

const TextFieldStyle = styled.div`
  position: relative;

  & > ${IconButtonStyle} {
    position: absolute;
    top: 5px;
    right: 5px;
  }
`

export default TextFieldStyle

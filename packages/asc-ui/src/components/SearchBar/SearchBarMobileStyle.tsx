import styled from '@datapunt/asc-core'
import IconButtonStyle from '../IconButton/IconButtonStyle'
import { svgFill } from '../../utils'
import TextFieldStyle from '../TextField/TextFieldStyle'

interface Props {}

const SearchBarMobileStyle = styled.div<Props>`
  display: flex;

  ${TextFieldStyle} {
    flex-grow: 1;
  }

  & > ${IconButtonStyle} {
    margin-left: 5px;
    padding: 10px;
    width: 40px;
    height: 40px;
    & svg {
      ${svgFill('tint', 'level5')};
    }
  }
`

export default SearchBarMobileStyle

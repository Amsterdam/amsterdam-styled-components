import styled from '../../styled-components'
import IconButtonStyle from '../IconButtonStyle'
import { svgFill } from '../../utils'
import TextFieldStyle from '../TextFieldStyle'

const SearchBarStyle = styled.div`
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
      ${svgFill('tint', 'level1')};
    }
  }
`

export default SearchBarStyle

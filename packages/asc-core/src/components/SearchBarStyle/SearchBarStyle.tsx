import styled from '../../styled-components'
import IconButtonStyle from '../IconButtonStyle'
import { svgFill } from '../../utils'

export const TextFieldStyle = styled.div`
  position: relative;

  & > ${IconButtonStyle} {
    position: absolute;
    top: 5px;
    right: 5px;
  }
`

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

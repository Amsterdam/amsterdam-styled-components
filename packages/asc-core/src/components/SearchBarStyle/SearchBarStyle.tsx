import styled from '../../styled-components'
import InputStyle from '../InputStyle'
import IconButtonStyle from '../IconButtonStyle'
import { svgFill } from '../../utils'

const SearchBarStyle = styled.div`
  display: flex;

  ${InputStyle} {
    width: 500px;
  }

  ${IconButtonStyle} {
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

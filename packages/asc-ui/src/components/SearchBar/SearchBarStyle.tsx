import styled from '@datapunt/asc-core'
import InputStyle from '../Input/InputStyle'
import IconButtonStyle from '../IconButton/IconButtonStyle'
import { svgFill } from '../../utils'

const SearchBarStyle = styled.div`
  display: flex;

  ${InputStyle} {
    flex-grow: 1;
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

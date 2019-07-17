import styled from '@datapunt/asc-core'
import IconButtonStyle from '../IconButton/IconButtonStyle'
import { showHide, ShowHideTypes, svgFill, customCss } from '../../utils'
import TextFieldStyle from '../TextField/TextFieldStyle'

export interface Props extends ShowHideTypes {
  css?: string
}

const SearchBarStyle = styled.div<Props>`
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

  ${showHide()}
  ${customCss}
`

export default SearchBarStyle

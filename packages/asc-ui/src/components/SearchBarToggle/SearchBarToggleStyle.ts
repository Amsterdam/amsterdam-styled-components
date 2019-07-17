import styled from '@datapunt/asc-core'
import {
  color,
  showHide,
  ShowHideTypes,
  customCss,
  CustomCssPropsInterface,
} from '../../utils'
import SearchBarStyle from '../SearchBar/SearchBarStyle'
import ToggleStyle from '../Toggle/ToggleStyle'

export interface SearchBarMenuStyleProps
  extends ShowHideTypes,
    CustomCssPropsInterface {
  open?: boolean
}

const SearchBarMenuStyle = styled(ToggleStyle)<SearchBarMenuStyleProps>`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  & > ${SearchBarStyle} {
    position: absolute;
    top: 50px;
    right: 0;
    left: 0;
    padding: 15px;
    background-color: ${color('tint', 'level2')};
    border-bottom: 4px solid;
  }

  ${showHide()}
  ${customCss}
`

export default SearchBarMenuStyle

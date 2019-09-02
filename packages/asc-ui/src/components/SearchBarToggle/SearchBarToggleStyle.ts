import styled from '@datapunt/asc-core'
import {
  themeColor,
  showHide,
  ShowHideTypes,
  customCss,
  CustomCssPropsInterface,
} from '../../utils'
import SearchBarStyle from '../SearchBar/SearchBarStyle'
import ToggleStyle from '../Toggle/ToggleStyle'

export interface SearchBarToggleStyleProps
  extends ShowHideTypes,
    CustomCssPropsInterface {
  open?: boolean
}

const SearchBarToggleStyle = styled(ToggleStyle)<SearchBarToggleStyleProps>`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  & > ${SearchBarStyle} {
    position: absolute;
    top: 50px;
    right: 0;
    left: 0;
    padding: 15px;
    background-color: ${themeColor('tint', 'level2')};
    border-bottom: 4px solid;
  }

  ${showHide()}
  ${customCss}
`

export default SearchBarToggleStyle

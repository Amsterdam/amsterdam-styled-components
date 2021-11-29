import styled from 'styled-components'
import type { ShowHideTypes } from '../../utils'
import { themeColor, showHide, showAboveBackDrop } from '../../utils'
import SearchBarStyle from '../SearchBar/SearchBarStyle'
import ToggleStyle from '../Toggle/ToggleStyle'
import { TOGGLE_BUTTON_SIZE } from '../shared/constants'
import ToggleButtonStyle from '../Button/ToggleButton'

export interface SearchBarToggleStyleProps extends ShowHideTypes {
  open?: boolean
}

const SearchBarToggleStyle = styled(ToggleStyle)<SearchBarToggleStyleProps>`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  & > ${ToggleButtonStyle} {
    ${showAboveBackDrop()}
  }

  & > ${SearchBarStyle} {
    position: absolute;
    top: ${TOGGLE_BUTTON_SIZE}px;
    right: 0;
    left: 0;
    padding: 15px;
    background-color: ${themeColor('tint', 'level2')};
    border-bottom: 4px solid;
    ${showAboveBackDrop()}
  }

  ${showHide()}
`

export default SearchBarToggleStyle

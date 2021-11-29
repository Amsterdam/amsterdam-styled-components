import styled from 'styled-components'
import type { ShowHideTypes } from '../../utils'
import { showHide, themeSpacing } from '../../utils'
import TextFieldStyle from '../TextField/TextFieldStyle'
import ButtonStyle from '../Button/ButtonStyle'
import { SEARCH_BAR_HEIGHT } from '../shared/constants'
import InputStyle from '../Input/InputStyle'

export type Props = ShowHideTypes

const SearchBarStyle = styled.div<Props>`
  display: flex;
  position: relative;

  ${TextFieldStyle} {
    flex-grow: 1;

    /** The searchbar input has a different height to fit the (small) header */
    ${InputStyle} {
      height: ${SEARCH_BAR_HEIGHT}px;
      padding: ${themeSpacing(1, 2)};
    }
  }

  /** The searchbar button has a different height to fit the (small) header */
  & > ${ButtonStyle} {
    min-width: auto;
    margin-left: ${themeSpacing(1)};
    height: ${SEARCH_BAR_HEIGHT}px;
    width: ${SEARCH_BAR_HEIGHT}px;
  }

  ${showHide()}
`

export default SearchBarStyle

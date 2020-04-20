import styled from 'styled-components'
import { showHide, ShowHideTypes } from '../../utils'
import TextFieldStyle from '../TextField/TextFieldStyle'
import ButtonStyle from '../Button/ButtonStyle'

export interface Props extends ShowHideTypes {}

const SearchBarStyle = styled.div<Props>`
  display: flex;
  position: relative;

  ${TextFieldStyle} {
    flex-grow: 1;
  }

  & > ${ButtonStyle} {
    margin-left: 5px;
  }

  ${showHide()}
`

export default SearchBarStyle

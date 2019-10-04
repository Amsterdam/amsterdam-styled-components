import styled from '@datapunt/asc-core'
import { showHide, ShowHideTypes, customCss } from '../../utils'
import TextFieldStyle from '../TextField/TextFieldStyle'
import ButtonStyle from '../Button/ButtonStyle'

export interface Props extends ShowHideTypes {
  css?: string
  hasBackDrop?: boolean
}

const SearchBarStyle = styled.div<Props>`
  display: flex;

  ${TextFieldStyle} {
    flex-grow: 1;
  }

  & > ${ButtonStyle} {
    margin-left: 5px;
  }

  ${showHide()}
  ${customCss}
  ${({ hasBackDrop }) =>
    hasBackDrop &&
    `
position: relative;
z-index: 20;
`}
`

export default SearchBarStyle

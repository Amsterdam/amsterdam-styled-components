import styled, { css } from '@datapunt/asc-core'
import IconButtonStyle from '../IconButton/IconButtonStyle'
import { color, showHide, ShowHideTypes } from '../../utils'
import SearchBarStyle from '../SearchBar/SearchBarStyle'

export interface SearchBarMenuStyleProps extends ShowHideTypes {
  open?: boolean
  css?: string
}

const SearchBarMenuStyle = styled.div<SearchBarMenuStyleProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  [aria-hidden='true'] {
    display: none;
  }

  & > ${SearchBarStyle} {
    position: absolute;
    top: 50px;
    right: 0;
    left: 0;
    padding: 15px;
    background-color: ${color('tint', 'level2')};
  }

  & > ${IconButtonStyle} {
    height: 50px;
    width: 50px;
    background-color: ${({ open, theme }) =>
      color('tint', open ? 'level2' : 'level1')({ theme })};
  }

  ${showHide()}
  ${props =>
    props.css &&
    css`
      ${props.css}
    `}
`

export default SearchBarMenuStyle

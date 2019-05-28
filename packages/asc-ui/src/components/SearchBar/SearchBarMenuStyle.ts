import styled from '@datapunt/asc-core'
import IconButtonStyle from '../IconButton/IconButtonStyle'
import { color } from '../../utils'
import SearchBarStyle from './SearchBarStyle'

export type SearchBarMenuStyleProps = {
  open: boolean
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
    width: calc(100% - 30px);
    background-color: ${color('tint', 'level2')};
  }

  & > ${IconButtonStyle} {
    height: 50px;
    width: 50px;
    background-color: ${({ open, theme }) =>
      color('tint', open ? 'level2' : 'level1')({ theme })};
  }
`

export default SearchBarMenuStyle

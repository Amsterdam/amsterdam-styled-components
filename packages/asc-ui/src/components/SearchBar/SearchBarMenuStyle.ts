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
    position: relative;
    padding: 15px;
    width: 100%;
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

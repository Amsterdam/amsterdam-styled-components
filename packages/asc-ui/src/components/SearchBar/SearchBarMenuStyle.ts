import styled from '@datapunt/asc-core'
import IconButtonStyle from '../IconButton/IconButtonStyle'
import { color } from '../../utils'

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

  & > ${IconButtonStyle} {
    background-color: ${({ open, theme }) =>
      color('tint', open ? 'level3' : 'level1')({ theme })};
  }
`

export default SearchBarMenuStyle

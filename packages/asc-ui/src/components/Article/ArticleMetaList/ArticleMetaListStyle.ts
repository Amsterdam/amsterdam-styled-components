import styled from '@datapunt/asc-core'
import { breakpoint, color } from '../../../utils'

export default styled.ul`
  margin: 15px 0 20px 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  color: ${color('tint', 'level5')};

  @media screen and ${breakpoint('min-width', 'laptopM')} {
    margin: 20px 0 24px 0;
  }
`

export const ArticleMetaListItemStyle = styled.li`
  &:not(:last-of-type) {
    position: relative;
    margin-right: 20px;
    &::after {
      content: '';
      height: 100%;
      width: 1px;
      background-color: ${color('tint', 'level5')};
      display: inline-block;
      position: absolute;
      right: -10px;
    }
  }
`

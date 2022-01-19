import styled from 'styled-components'
import { breakpoint, themeColor } from '../../../utils'

export const EDITORIAL_META_MARGIN_TOP = 20
export const EDITORIAL_META_LINE_HEIGHT = 16

export default styled.ul`
  margin: 15px 0 20px 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  line-height: ${EDITORIAL_META_LINE_HEIGHT}px;
  color: ${themeColor('tint', 'level5')};

  @media screen and ${breakpoint('min-width', 'laptopM')} {
    margin: ${EDITORIAL_META_MARGIN_TOP}px 0 24px 0;
  }
`

export const EditorialMetaListItemStyle = styled.li`
  &:not(:last-of-type) {
    position: relative;
    margin-right: 20px;

    &::after {
      content: '';
      height: 100%;
      width: 1px;
      background-color: ${themeColor('tint', 'level5')};
      display: inline-block;
      position: absolute;
      right: -10px;
    }
  }
`

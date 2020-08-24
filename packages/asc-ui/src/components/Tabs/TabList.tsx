import styled from 'styled-components'
import { themeColor, themeSpacing } from '../../utils'

const TabList = styled.div.attrs({
  role: 'tablist',
})`
  min-width: 100%;
  box-shadow: inset 0 -2px 0 0 ${themeColor('tint', 'level2')};
  white-space: nowrap;
  overflow-x: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  mask: linear-gradient(
      to right,
      black calc(100% - ${themeSpacing(8)}),
      transparent
    ),
    linear-gradient(
      to bottom,
      transparent calc(100% - 6px),
      black calc(100% - 6px)
    );

  &::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
`

export default TabList

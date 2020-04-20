import styled from 'styled-components'
import { themeColor, breakpoint } from '../../../utils'

export default styled.div`
  padding: 8px 14px;
  background-color: ${themeColor('tint', 'level1')};
  position: absolute;
  bottom: 56px;
  left: 0;
  max-width: calc(100% - 44px);
  word-break: break-word;

  @media screen and ${breakpoint('min-width', 'tabletM')} {
    padding: 16px;
  }
`

import styled from 'styled-components'
import { themeColor, themeSpacing, breakpoint } from '../../utils'
import IconComponent from '../Icon'

export default styled.blockquote`
  padding: ${themeSpacing(8, 0)};
  margin: 0;
  display: flex;
  line-height: 24px;
  color: ${themeColor('tint', 'level6')};

  @media screen and ${breakpoint('max-width', 'mobileM')} {
    font-size: 16px;
  }

  @media screen and ${breakpoint('min-width', 'mobileM')} {
    font-size: 18px;
  }
`

export const Icon = styled(IconComponent)`
  align-self: flex-start;
  fill: ${themeColor('secondary')};
  padding-right: 20px;

  @media screen and ${breakpoint('max-width', 'mobileM')} {
    & svg {
      width: 20px;
      height: 20px;
    }
  }
`

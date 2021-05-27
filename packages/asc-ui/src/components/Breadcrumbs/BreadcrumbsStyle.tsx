import styled from 'styled-components'
import { themeColor, themeSpacing, svgFill } from '../../utils/themeUtils'
import Icon from '../Icon'

export default styled.ol`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  list-style: none;
  padding-inline-start: 0;

  li {
    display: flex;
    align-items: center;
    color: ${themeColor('secondary', 'main')};

    a,
    span {
      font-size: 14px;
      line-height: 22px;
      color: ${themeColor('tint', 'level5')};
      text-decoration: none;
      text-decoration-color: ${themeColor('tint', 'level5')};
      margin: ${themeSpacing(0, 2, 0, 0)};
    }

    a {
      &:hover {
        color: ${themeColor('secondary', 'main')};
        text-decoration: underline;
      }

      &:focus {
        outline: auto;
        outline-color: ${themeColor('support', 'focus')};
        outline-style: solid;
        outline-width: 2px;
        outline-offset: 4px;
      }
    }
  }

  ${svgFill(themeColor('tint', 'level5'))};
`
export const StyledIcon = styled(Icon)`
  padding: ${themeSpacing(0, 2, 0, 0)};
`

import styled from 'styled-components'
import { themeColor, themeSpacing, svgFill } from '../../utils/themeUtils'
import Icon from '../Icon'

export default styled.ol`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  color: red;

  li {
    list-style-type: none;
    white-space: nowrap;

    a {
      font-size: 14px;
      line-height: 20px;
      color: ${themeColor('tint', 'level5')};
      text-decoration: none;
      text-decoration-color: ${themeColor('tint', 'level5')};
      margin: ${themeSpacing(0, 2, 0, 0)};

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

  li:first-child ${Icon} {
    display: none;
  }

  ${svgFill(themeColor('tint', 'level5'))};
`
export const StyledIcon = styled(Icon)`
  display: inline-block;
  padding: ${themeSpacing(0, 2, 0, 0)};
`

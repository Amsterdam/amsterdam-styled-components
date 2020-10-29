import styled from 'styled-components'
import { themeColor, svgFill } from '../../utils/themeUtils'
import Icon from '../Icon'

export default styled.ol`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;

  li:first-child ${Icon} {
    display: none;
  }

  ${svgFill(themeColor('tint', 'level5'))};
`

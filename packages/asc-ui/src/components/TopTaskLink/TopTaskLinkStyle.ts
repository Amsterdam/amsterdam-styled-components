import styled from 'styled-components'
import { svgFill, themeColor, themeSpacing } from '../../utils'
import IconStyle from '../Icon/IconStyle'
import Paragraph from '../Paragraph'

export const TopTaskText = styled(Paragraph)`
  margin: 0;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
`

export const TopTaskTitle = styled(Paragraph)`
  margin: 0;

  /** Add space to the text if used together */
  & + ${TopTaskText} {
    margin-top: ${themeSpacing(1)};
  }
`

export default styled.a<{
  onDarkBackground?: boolean
}>`
  display: block;
  padding: ${themeSpacing(2, 3)};
  text-decoration: none;
  color: ${themeColor('tint', 'level7')};
  background-color: ${themeColor('tint', 'level2')};
  border-style: solid;
  border-width: 0 2px 2px 0;
  border-color: ${({ onDarkBackground = false }) =>
    onDarkBackground
      ? themeColor('tint', 'level7')
      : themeColor('tint', 'level3')};

  :hover {
    border-color: ${themeColor('secondary', 'main')};

    ${TopTaskTitle} {
      text-decoration: underline;
      color: ${themeColor('secondary', 'main')};
    }
  }

  ${IconStyle} {
    margin-bottom: ${themeSpacing(2)};
    ${svgFill(themeColor('tint', 'level7'))};
  }
`

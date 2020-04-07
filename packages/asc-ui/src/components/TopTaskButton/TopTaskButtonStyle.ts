import styled from 'styled-components'
import { svgFill, themeColor, themeSpacing } from '../../utils'
import IconStyle from '../Icon/IconStyle'
import Paragraph from '../Paragraph'

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
    color: ${themeColor('secondary', 'main')};
    text-decoration: underline;
  }

  ${IconStyle} {
    margin-bottom: ${themeSpacing(2)};
    ${svgFill('tint', 'level7')};
  }
`

export const ParagraphStyle = styled(Paragraph)`
  margin-bottom: 0;
`

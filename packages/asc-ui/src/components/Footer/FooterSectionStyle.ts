import styled from 'styled-components'
import { themeColor, themeSpacing, svgFill } from '../../utils'
import FooterHeading from './FooterHeading'
import IconStyle from '../Icon'
import Button from '../Button'
import { Toggle } from '../Toggle'

const FooterContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  color: ${themeColor('tint', 'level1')};
`

const StyledFooterHeading = styled(FooterHeading)`
  margin-bottom: 0;
  &:hover {
    text-decoration: underline;
  }

  & > ${IconStyle} {
    margin-right: ${themeSpacing(2)};
    ${svgFill(themeColor('tint', 'level1'))};
  }
`

const StyledButton = styled(Button)`
  /*
  Fixed the alignment of the Button compared to the children
  See PR: https://github.com/Amsterdam/amsterdam-styled-components/pull/834 
  */
  margin-left: -${themeSpacing(2)};
  padding-left: ${themeSpacing(2)};

  &,
  &:hover {
    background-color: transparent;
  }
`

const StyledFooterToggle = styled(Toggle)`
  margin-bottom: ${themeSpacing(3)};

  ${FooterContentWrapper} {
    margin-top: ${themeSpacing(2)};
  }
`

export {
  FooterContentWrapper,
  StyledFooterHeading,
  StyledButton,
  StyledFooterToggle,
}

import styled, { css } from 'styled-components'
import { themeColor, themeSpacing, svgFill, breakpoint } from '../../utils'
import FooterHeading from './FooterHeading'
import IconStyle from '../Icon'
import Button from '../Button'
import { Toggle } from '../Toggle'

type SsrProp = {
  ssr?: boolean
}

const FooterContentWrapper = styled.div<SsrProp>`
  display: flex;
  flex: 1;
  flex-direction: column;
  color: ${themeColor('tint', 'level1')};

  ${({ ssr }) =>
    ssr &&
    css`
      @media screen and ${breakpoint('max-width', 'tabletM')} {
        display: none;
      }
    `}
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

const StyledFooterToggle = styled(Toggle)<SsrProp>`
  margin-bottom: ${themeSpacing(3)};

  ${({ ssr }) =>
    ssr &&
    css`
      @media screen and ${breakpoint('min-width', 'tabletM')} {
        display: none;
      }
    `}

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

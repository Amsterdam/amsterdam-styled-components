import styled, { css } from 'styled-components'
import { themeColor, themeSpacing, svgFill, breakpoint } from '../../utils'
import { Theme } from '../../types'
import FooterHeading from './FooterHeading'
import IconStyle from '../Icon'
import Button from '../Button'
import { Toggle } from '../Toggle'

type FooterProps = {
  ssr?: boolean
  breakpoint?: keyof Theme.BreakpointsInterface
}

const FooterContentWrapper = styled.div<FooterProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  color: ${themeColor('tint', 'level1')};
  ${({ ssr, breakpoint: breakPointstring }) =>
    ssr &&
    breakPointstring &&
    css`
      @media screen and ${breakpoint('max-width', breakPointstring)} {
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

const StyledFooterToggle = styled(Toggle)<FooterProps>`
  margin-bottom: ${themeSpacing(3)};
  ${({ ssr, breakpoint: breakPointstring }) =>
    ssr &&
    breakPointstring &&
    css`
      @media screen and ${breakpoint('min-width', breakPointstring)} {
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

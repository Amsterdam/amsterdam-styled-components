import styled, { css, styledComponents } from '@datapunt/asc-core'
import { Props as TypographyProps } from '../Typography/TypographyStyle'
import Typography from '../Typography'
import { themeColor, themeSpacing, breakpoint } from '../../utils'
import IconStyle from '../Icon/IconStyle'

export type Props = {} & TypographyProps & styledComponents.StyledProps<any>

export const AccordionStyleCSS = () => {
  return css<Props>`
    margin: 0 ${themeSpacing(2)} ${themeSpacing(2)} 0;
    padding: 0 ${themeSpacing(13)} 0 ${themeSpacing(5)};
    line-height: 44px;
    display: block;
    width: 620px;
    background-color: ${themeColor('tint', 'level1')};
    color: ${themeColor('tint', 'level7')};
    border: solid 1px ${themeColor('tint', 'level3')};
    font-size: 16px;
    font-weight: 500;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media screen and ${breakpoint('max-width', 'tabletS')} {
      width: auto;
    }

    &:hover {
      background-color: ${themeColor('tint', 'level3')};
      cursor: pointer;
    }

    ${IconStyle} {
      position: absolute;
      right: ${themeSpacing(5)};
      top: ${themeSpacing(4)};
    }
  `
}

export default styled(Typography)<Props>`
  ${AccordionStyleCSS}
`

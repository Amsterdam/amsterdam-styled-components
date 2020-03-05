import styled, { css, styledComponents } from '@datapunt/asc-core'
import TypographyStyle, {
  Props as TypographyProps,
} from '../Typography/TypographyStyle'
import { themeColor, themeSpacing } from '../../utils'
import IconStyle from '../Icon/IconStyle'

export type Props = {} & TypographyProps & styledComponents.StyledProps<any>

export const FilterTagStyleCSS = () => {
  return css<Props>`
    margin: 0 ${themeSpacing(2)} ${themeSpacing(2)} 0;
    padding: 0 ${themeSpacing(2)};
    line-height: 30px;
    display: inline-block;
    width: fit-content;
    background-color: ${themeColor('tint', 'level1')};
    color: ${themeColor('tint', 'level7')};
    border: solid 1px ${themeColor('tint', 'level3')};
    font-size: 16px;
    font-weight: 500;

    &:hover {
      background-color: ${themeColor('tint', 'level3')};
      cursor: pointer;
    }

    ${IconStyle} {
      margin: 0 0 0 ${themeSpacing(2)};
      vertical-align: middle;
    }
  `
}

export default styled(TypographyStyle)<Props>`
  ${FilterTagStyleCSS}
`

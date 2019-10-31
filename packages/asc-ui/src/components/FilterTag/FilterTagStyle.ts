import styled, { css, styledComponents } from '@datapunt/asc-core'
import { Props as TypographyProps } from '../Typography/TypographyStyle'
import Typography from '../Typography'
import { themeColor } from '../../utils'

export type Props = {} & TypographyProps & styledComponents.StyledProps<any>

export const FilterTagStyleCSS = () => {
  return css<Props>`
    margin: 0 8px 8px 0;
    padding: 0 7px 0 9px;
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

    span {
      margin: 0 5px;
      vertical-align: middle;
    }
  `
}

export default styled(Typography)<Props>`
  ${FilterTagStyleCSS}
`

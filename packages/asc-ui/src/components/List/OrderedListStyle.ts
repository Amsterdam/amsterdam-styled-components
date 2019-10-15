import styled, { css } from '@datapunt/asc-core'
import { getTypographyFromTheme, themeSpacing } from '../../utils/themeUtils'

export const OrderedListStyleCSS = css`
  margin: ${themeSpacing(0, 0, 6, 6)};
  padding: 0;
  counter-reset: item;

  li {
    /* Unfortunately we target the element instead of the style. This because we have to target the LI if it's rendered in CustomHTMLBlock */
    position: relative;
    ${({ theme }) => getTypographyFromTheme()({ as: 'li', theme })};
    list-style-type: none;
    counter-increment: item;

    &::before {
      display: inline-block;
      width: 1em;
      position: absolute;
      left: -${themeSpacing(6)};
      top: 0;
      padding-right: 0.5em;
      font-weight: bold;
      text-align: right;
      content: counter(item) '.';
    }
  }
`

export default styled.ol`
  ${OrderedListStyleCSS}
`

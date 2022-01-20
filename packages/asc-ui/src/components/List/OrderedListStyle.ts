import styled, { css } from 'styled-components'
import { getTypographyFromTheme, themeSpacing } from '../../utils/themeUtils'

export const OrderedListStyleCSS = css`
  margin: ${themeSpacing(0, 0, 6, 0)};
  padding: 0;
  counter-reset: item;

  & & {
    margin: ${themeSpacing(2, 0, 0, 6)};
  }

  li {
    /* Unfortunately we target the element instead of the style. This because we have to target the LI if it's rendered in CustomHTMLBlock */
    position: relative;
    ${({ theme }) => getTypographyFromTheme()({ as: 'li', theme })};
    list-style-type: none;
    counter-increment: item;

    &::before {
      display: inline-block;
      padding-right: ${themeSpacing(3)};
      font-weight: bold;
      text-align: right;
      content: counter(item) '.';
    }
  }
`

export default styled.ol`
  ${OrderedListStyleCSS}
`

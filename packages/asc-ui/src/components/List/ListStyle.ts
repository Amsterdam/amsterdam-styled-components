import styled, { css } from 'styled-components'
import { stripUnit } from 'polished'
import { themeColor, themeSpacing, getTypographyFromTheme } from '../../utils'
import { getTypographyValueFromProperty } from '../../utils/themeUtils'

export type Props = {
  variant?: 'bullet'
}

const BULLET_SIZE = 8
const BULLET_MARGIN = 16

export const BulletCSS = css`
  margin-left: ${BULLET_MARGIN + BULLET_SIZE}px;

  li {
    /* Unfortunately we target the element instead of the style. This because we have to target the LI if it's rendered in CustomHTMLBlock */
    position: relative;
    ${({ theme }) => getTypographyFromTheme()({ as: 'li', theme })};

    &::before {
      content: '';
      position: absolute;
      width: ${BULLET_SIZE}px;
      height: ${BULLET_SIZE}px;
      background-color: ${themeColor('tint', 'level7')};
      left: -${BULLET_MARGIN + BULLET_SIZE}px;
      top: ${({ theme }) =>
        `${
          (Number(
            stripUnit(
              getTypographyValueFromProperty(
                'li',
                'lineHeight',
              )({
                theme,
              }),
            ),
          ) -
            BULLET_SIZE) /
          2
        }px`};
    }
  }
`

const getVariant =
  () =>
  ({ variant }: Props) => {
    switch (variant /* Switch statement because more variants to be added */) {
      case 'bullet':
        return BulletCSS

      default:
        return css``
    }
  }

export const ListStyleCSS = css`
  list-style: none;
  margin: ${themeSpacing(0, 0, 6, 0)};
  padding: 0;
`

export default styled.ul<Props>`
  display: flex;
  flex-direction: column;
  ${ListStyleCSS}
  ${getVariant()}
`

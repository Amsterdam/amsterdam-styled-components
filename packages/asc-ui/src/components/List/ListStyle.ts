import styled, { css } from '@datapunt/asc-core'
import { themeColor } from '../../utils'

export type Props = {
  variant?: 'bullet'
}

const BULLET_SIZE = 8
const BULLET_MARGIN = 15

export const BulletCSS = css`
  margin-left: ${BULLET_MARGIN + BULLET_SIZE}px;

  li {
    /* Unfortunately we target the element instead of the style. This because we have to target the LI if it's rendered in CustomHTMLBlock */
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: ${BULLET_SIZE}px;
      height: ${BULLET_SIZE}px;
      background-color: ${themeColor('tint', 'level7')};
      top: 50%;
      transform: translateY(-50%);
      left: -${BULLET_MARGIN + BULLET_SIZE}px;
    }
  }
`

const getVariant = () => ({ variant }: Props) => {
  switch (variant /* Switch statement because more variants to be added */) {
    case 'bullet':
      return BulletCSS

    default:
      return css``
  }
}

export const ListStyleCSS = css`
  list-style: none;
  background-color: ${themeColor('tint', 'level1')};
  margin: 0 0 24px 0;
  padding: 0;
`

export default styled.ul<Props>`
  ${ListStyleCSS}
  ${getVariant()}
`

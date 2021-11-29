import styled, { css } from 'styled-components'
import { stripUnit } from 'polished'
import { breakpoint } from '../../../utils'
import EditorialBodyStyle from '../EditorialBody/EditorialBodyStyle'
import { EDITORIAL_PADDING_TOP } from '../EditorialPost/EditorialPostStyle'
import { getTypographyValueFromProperty } from '../../../utils/themeUtils'
import {
  EDITORIAL_META_LINE_HEIGHT,
  EDITORIAL_META_MARGIN_TOP,
} from '../EditorialMetaList/EditorialMetaListStyle'
import type { Props as EditorialPostProps } from '../EditorialPost/EditorialPost'
import EditorialPost from '../EditorialPost/EditorialPost'

export default styled(EditorialPost)<EditorialPostProps>`
  ${EditorialBodyStyle} {
    ${({ image }) =>
      !!image &&
      css`
        @media screen and ${breakpoint('min-width', 'tabletM')} {
          padding: ${EDITORIAL_PADDING_TOP}px 24px;
        }
      `}

    /* 
    Here we calculate how much the EditorialBody needs to shift up by getting existing css values from:
    - The H1 line-height
    - the padding of the EditorialBody
    - the EditorialMeta margin-top and line-height
    */
    @media screen and ${breakpoint('min-width', 'tabletM')} {
      margin-top: ${({ image, theme }) =>
        image
          ? `${
              (EDITORIAL_PADDING_TOP * 2 +
                EDITORIAL_META_LINE_HEIGHT +
                EDITORIAL_META_MARGIN_TOP +
                Number(
                  stripUnit(
                    getTypographyValueFromProperty(
                      'h1',
                      'lineHeight',
                      'tabletS',
                    )({
                      theme,
                    }),
                  ),
                )) *
              -1
            }px`
          : `0`};
    }
  }
`

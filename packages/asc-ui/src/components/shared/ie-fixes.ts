/* eslint-disable import/prefer-default-export */
import { css } from '@datapunt/asc-core'

export const flexboxMinHeightFix = () => css`
  &::after {
    content: '';
    display: block;
    min-height: inherit;
    font-size: 0;
  }
`

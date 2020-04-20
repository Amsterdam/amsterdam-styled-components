/* eslint-disable import/prefer-default-export */
import { css } from 'styled-components'

export const flexboxMinHeightFix = () => css`
  &::after {
    content: '';
    display: block;
    min-height: inherit;
    font-size: 0;
  }
`

import styled, { css } from '@datapunt/asc-core'
import {
  HEADER_HEIGHT_SMALL,
  HEADER_HEIGHT_TALL,
  WRAPPER_MAX_WIDTH,
} from '../shared/sizes'
import { breakpoint, themeColor } from '../../utils'
import { PageLayoutInterface } from '../shared/types'

const BodyStyle = styled.div<PageLayoutInterface>`
  background-color: ${themeColor('tint', 'level1')};
  position: relative;
  z-index: 1;
  height: calc(100% - ${HEADER_HEIGHT_SMALL}px);
  top: 0;
  ${({ tall }) => {
    return tall
      ? css`
          @media screen and ${breakpoint('min-width', 'laptopM')} {
            height: calc(100% - ${HEADER_HEIGHT_TALL}px);
          }
        `
      : css``
  }};
  width: 100%;
  max-width: ${({ fullWidth }) =>
    fullWidth ? 'inherit' : `${WRAPPER_MAX_WIDTH}px`};
  margin: 0 auto;
`

export default BodyStyle

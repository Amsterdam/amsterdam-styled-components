import styled, { css } from '@datapunt/asc-core'
import {
  PageLayoutInterface,
  HEADER_HEIGHT_SMALL,
  HEADER_HEIGHT_TALL,
  WRAPPER_MAX_WIDTH,
} from '../shared/sizes'
import { breakpoint, color } from '../../utils'

const BodyStyle = styled.div<PageLayoutInterface>`
  background-color: ${color('tint', 'level1')};
  position: relative;
  z-index: 1;
  height: calc(100% + ${HEADER_HEIGHT_SMALL}px);
  top: ${HEADER_HEIGHT_SMALL}px;
  ${({ tall }) => {
    return tall
      ? css`
          @media screen and ${breakpoint('min-width', 'laptopM')} {
            height: calc(100% - ${HEADER_HEIGHT_TALL}px);
            top: 0;
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

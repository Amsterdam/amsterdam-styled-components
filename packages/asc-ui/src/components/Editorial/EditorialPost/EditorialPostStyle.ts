import styled, { css } from 'styled-components'
import { breakpoint, themeColor } from '../../../utils'
import BackgroundImageStyle from '../../BackgroundImage/BackgroundImageStyle'
import EditorialContentStyle from '../EditorialContent/EditorialContentStyle'

export interface Props {
  hasImage: boolean
}

export const EDITORIAL_PADDING_TOP = 32

export default styled.section<Props>`
  width: 100%;
  color: ${themeColor('tint', 'level6')};
  background-color: ${themeColor('tint', 'level1')};
  ${({ hasImage }) =>
    hasImage &&
    css`
      margin-top: 0;
      ${EditorialContentStyle} {
        margin-top: ${EDITORIAL_PADDING_TOP * 0.75}px;
        @media screen and ${breakpoint('min-width', 'tabletM')} {
          margin-top: ${EDITORIAL_PADDING_TOP}px;
        }
      }
    `}

  ${BackgroundImageStyle} {
    max-height: 560px;
    min-height: 250px;
  }
`

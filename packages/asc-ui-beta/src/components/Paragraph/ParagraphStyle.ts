import { themeColor, breakpoint } from '@amsterdam/asc-ui'
import styled, { css } from 'styled-components'

import { fluidTypoStyle, typographyStyle } from '../../utils/betaUtils'

export interface Props {
  intro?: boolean
}

const ParagraphStyle = styled.p<Props>`
  color: ${themeColor('tint', 'level6')};
  letter-spacing: 0.0125rem;
  font-weight: 500;

  @media screen and ${breakpoint('max-width', 'laptop')} {
    letter-spacing: 0;
  }

  ${({ intro }) =>
    intro &&
    css`
      letter-spacing: 0.025rem;

      @media screen and ${breakpoint('max-width', 'laptop')} {
        font-weight: 900;
        letter-spacing: 0.0125rem;
      }
    `}

  ${fluidTypoStyle}
  ${typographyStyle}
`

export default ParagraphStyle

import styled, { css } from 'styled-components'
import type { Props as TypographyProps } from '../Typography/TypographyStyle'
import TypographyStyle from '../Typography/TypographyStyle'
import { calculateFluidStyle } from '../../utils'

export type Props = {
  intro?: boolean
} & TypographyProps

export default styled(TypographyStyle)<Props>`
  ${({ intro }) =>
    intro &&
    css`
      font-size: ${calculateFluidStyle(22, 30)};
      line-height: ${calculateFluidStyle(35, 45)};
    `}
`

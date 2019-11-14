import styled, { css } from '@datapunt/asc-core'
import LabelStyle from '../Label/LabelStyle'
import { themeSpacing } from '../../utils'

export type Props = {
  name?: string
  horizontal?: boolean
  disabled?: boolean
}

export default styled.div<Props>`
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
  ${({ horizontal }) =>
    horizontal &&
    css`
      ${LabelStyle} {
        margin-right: ${themeSpacing(4)};
      }
    `}
`

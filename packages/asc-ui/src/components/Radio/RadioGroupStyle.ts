import styled, { css } from 'styled-components'
import LabelStyle from '../Label/LabelStyle'
import { themeSpacing } from '../../utils'

export interface Props {
  name?: string
  horizontal?: boolean
  disabled?: boolean
  error?: boolean
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

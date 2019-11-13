import styled, { css } from '@datapunt/asc-core'
import RadioStyle from './RadioStyle'

export type Props = {
  disabled?: boolean
  name?: string
  horizontal?: boolean
}

export default styled.div<Props>`
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
`

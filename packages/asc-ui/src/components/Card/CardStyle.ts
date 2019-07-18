import styled, { Theme, css } from '@datapunt/asc-core'
import { color } from '../../utils'
import CardActionsStyle from './CardActionsStyle'

export type Props = {
  maxWidth?: number
  shadow?: boolean
  horizontal?: boolean
  backgroundColor?: keyof Theme.Tint
}

const CardStyle = styled.div<Props>`
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}px;`}
  ${({ shadow }) => shadow && 'box-shadow: 1px 1px #e6e6e6;'}
  background-color: ${({ backgroundColor, theme }) =>
    color('tint', backgroundColor || 'level1')({ theme })};
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
  justify-content: space-between;
  align-items: center;
  ${({ horizontal }) =>
    horizontal &&
    css`
      ${CardActionsStyle} {
        width: inherit;
        padding: 24px 16px;
      }
    `}
`

export default CardStyle

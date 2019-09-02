import styled, { Theme, css } from '@datapunt/asc-core'
import { themeColor } from '../../utils'
import { perceivedLoading } from '../../utils/themeUtils'
import CardActionsStyle from './CardActionsStyle'
import { CardMediaWrapperStyle } from './CardMediaStyle'
import CardContentStyle from './CardContentStyle'

export type Props = {
  maxWidth?: number
  shadow?: boolean
  horizontal?: boolean
  backgroundColor?: keyof Theme.Tint
  loading?: boolean
}

const CardStyle = styled.div<Props>`
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}px;`}
  ${({ shadow, theme }) =>
    shadow && `box-shadow: 2px 2px ${themeColor('tint', 'level3')({ theme })};`}
  background-color: ${({ backgroundColor, theme }) =>
    themeColor('tint', backgroundColor || 'level1')({ theme })};
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
  justify-content: space-between;
  align-items: center;
  ${({ horizontal }) =>
    horizontal &&
    css`
      ${CardActionsStyle} {
        width: initial;
        padding: 24px 16px;
      }
    `}

  ${({ loading, theme }) =>
    loading &&
    css`
      ${perceivedLoading(theme)}

      ${CardMediaWrapperStyle} {
        ${perceivedLoading(theme)}
      }
      ${CardContentStyle} > * {
        display: none;
      }
    `}`

export default CardStyle

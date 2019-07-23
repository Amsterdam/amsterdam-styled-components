import styled, { Theme, css } from '@datapunt/asc-core'
import { color } from '../../utils'
import CardActionsStyle from './CardActionsStyle'
import SpinnerStyle from '../Spinner/SpinnerStyle'

export type Props = {
  maxWidth?: number
  shadow?: boolean
  horizontal?: boolean
  backgroundColor?: keyof Theme.Tint
  loading?: boolean
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
   ${({ loading }) =>
     loading &&
     css`
       > *:not(${SpinnerStyle}) {
         opacity: 0;
         opacity: 0.1;
       }
     `}
    ${SpinnerStyle} {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
`

CardStyle.defaultProps = {
  loading: false,
}

export default CardStyle

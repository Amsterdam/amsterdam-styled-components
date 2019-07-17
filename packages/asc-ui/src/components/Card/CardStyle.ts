import styled, { css } from '@datapunt/asc-core'
import CardContentStyle from './CardContentStyle'
import CardMediaStyle from './CardMediaStyle'

export type Props = {
  maxWidth?: number
  css?: any
  type?: Variant
}

const typeStyles = {
  default: css``,
  category: css`
    ${CardContentStyle} {
      padding: 13px;

      & p {
        line-height: 1;
      }
    }

    ${CardMediaStyle} {
      background-color: #f5f5f5;
      max-width: 80px;
    }
  `,
}

export type Variant = 'default' | 'category'

const getProperty = <T, K extends keyof T>(obj: T, key: K) => obj[key]

const CardStyle = styled.div<Props>`
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}px`}
  ${({ type = 'default' }) =>
    getProperty(typeStyles, type)}
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default CardStyle

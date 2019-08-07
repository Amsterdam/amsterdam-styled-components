import styled, { Theme } from '@datapunt/asc-core'
import { color } from '../../utils'

export type Props = {
  backgroundColor?: keyof Theme.Tint
  width?: number
}

export const CardMediaWrapperStyle = styled.div<Props>`
  background-color: ${({ backgroundColor, theme }) =>
    color('tint', backgroundColor || 'level1')({ theme })};
  position: relative;
  overflow: hidden;
  line-height: 0;
  display: flex;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  flex: ${({ width }) => (width ? `0 0 ${width}px` : 'auto')};
  align-self: stretch;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`

const CardMediaStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
`

export default CardMediaStyle

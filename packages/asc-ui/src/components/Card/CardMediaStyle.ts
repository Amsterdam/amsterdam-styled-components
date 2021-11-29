import styled from 'styled-components'
import { themeColor } from '../../utils'
import type { Theme } from '../../types'

export interface Props {
  backgroundColor?: keyof Theme.Tint
  maxWidth?: number
}

export const CardMediaWrapperStyle = styled.div<Props>`
  background-color: ${({ backgroundColor, theme }) =>
    themeColor('tint', backgroundColor || 'level1')({ theme })};
  position: relative;
  overflow: hidden;
  line-height: 0;
  display: flex;
  width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '100%')};
  flex: ${({ maxWidth }) => (maxWidth ? `0 0 ${maxWidth}px` : 'auto')};
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

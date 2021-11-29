import styled, { css } from 'styled-components'
import GridItemStyle from './GridItemStyle'

interface Props {
  direction?: string
  wrap?: string
  gutterY?: number
  gutterX?: number
  collapse?: boolean
}

/**
 * @deprecated, use Row with Column instead
 */
const GridContainerStyle = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
  ${({ collapse, gutterX }) =>
    gutterX &&
    collapse &&
    css`
      margin-left: ${gutterX * -1}px;
      margin-right: ${gutterX * -1}px;
    `}

  ${({ collapse, gutterY }) =>
    gutterY &&
    collapse &&
    css`
      margin-top: ${gutterY * -1}px;
      margin-bottom: ${gutterY * -1}px;
    `}

  ${GridItemStyle} {
    ${({ gutterY }) =>
      gutterY &&
      css`
        padding-top: ${gutterY}px;
        padding-bottom: ${gutterY}px;
      `}

    ${({ gutterX }) =>
      gutterX &&
      css`
        padding-left: ${gutterX}px;
        padding-right: ${gutterX}px;
      `}
  }
`

export default GridContainerStyle

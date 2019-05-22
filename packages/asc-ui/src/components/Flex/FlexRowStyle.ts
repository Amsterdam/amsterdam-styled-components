import styled, { css } from '@datapunt/asc-core'
import FlexItemStyle from './FlexItemStyle'

type Props = {
  flexDirection?: string
  flexWrap?: string
  gutterY?: number
  gutterX?: number
  collapse?: boolean
}

const FlexRowStyle = styled.div<Props>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
  ${({ collapse, gutterX }) =>
    gutterX &&
    collapse &&
    css`
      margin-left: ${(gutterX / 2) * -1}px;
      margin-right: ${(gutterX / 2) * -1}px;
    `}

  ${({ collapse, gutterY }) =>
    gutterY &&
    collapse &&
    css`
      margin-top: ${(gutterY / 2) * -1}px;
      margin-bottom: ${(gutterY / 2) * -1}px;
    `}

  ${FlexItemStyle} {
    ${({ gutterY }) =>
      gutterY &&
      css`
        padding-top: ${gutterY / 2}px;
        padding-bottom: ${gutterY / 2}px;
      `}

    ${({ gutterX }) =>
      gutterX &&
      css`
        padding-left: ${gutterX / 2}px;
        padding-right: ${gutterX / 2}px;
      `}
  }
`

export default FlexRowStyle

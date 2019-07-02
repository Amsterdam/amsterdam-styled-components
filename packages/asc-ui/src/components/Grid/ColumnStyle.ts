import React from 'react'
import styled, { Theme, css, ascDefaultTheme } from '@datapunt/asc-core'
import { mediaQuery, colCount, spanWidth, pushWidth } from '../../utils/grid'
import { TypeFlexPosition } from '.'

const { layouts } = ascDefaultTheme

export type TypeProps = {
  alignSelf?: TypeFlexPosition
  children: React.ReactNode
  className?: string
  debug?: boolean
  debugColor?: string
  id?: Theme.TypeLayout
  order?: Theme.TypeSpan
  parentSpan?: Theme.TypeSpan
  push?: Theme.TypeSpan
  span: Theme.TypeSpan
}

const ColumnStyle = styled.div<TypeProps>`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-self: ${({ alignSelf }) => alignSelf};
  justify-content: space-between;
  ${({ order }) =>
    order && typeof order !== 'number'
      ? Object.keys(order).map(id => {
          const layoutId = id as Theme.TypeLayout
          return css`
            @media ${mediaQuery(layoutId)} {
              order: ${order[layoutId]};
            }
          `
        })
      : css`
          order: ${order};
        `}
  ${({
    debug,
    span,
    parentSpan,
    push = 0,
  }: {
    debug?: boolean
    parentSpan?: Theme.TypeSpan
    span: Theme.TypeSpan
    push?: Theme.TypeSpan
  }) =>
    Object.keys(layouts).map(id => {
      const layoutId = id as Theme.TypeLayout
      const spanCount = colCount(span, layoutId)
      const pushCount = colCount(push, layoutId)
      if (spanCount < 1 || pushCount < 0) {
        return null
      }
      return css`
        @media ${mediaQuery(layoutId)} {
          ${debug &&
            css`
            &:before {
              content: 'span ${spanCount}';
            }
          `}
          max-width: ${spanWidth({ layoutId, span, parentSpan })};
          ${pushCount > 0 &&
            css`
              margin-left: ${pushWidth({ layoutId, push, parentSpan })};
            `}
        }
      `
    })};
  ${({ debug, debugColor }) =>
    debug &&
    css`
      position: relative;
      border: 1px solid;
      border-color: ${debugColor};

      &:before {
        background: white;
        position: absolute;
        top: -12px;
        left: 4px;
        padding: 2px 4px;
        border: 1px solid ${debugColor};
        font: 12px sans-serif;
      }
    `}
`

ColumnStyle.defaultProps = {
  order: 0,
}

export default ColumnStyle

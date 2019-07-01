import React from 'react'
import { Color } from 'csstype'
import styled, { css } from '../../styled-components'
import layouts from '../../theme/default/layouts'
import { Theme } from '../../theme'
import { mediaQuery, colCount, spanWidth, pushWidth } from '../../utils/grid'

type TypeFlexPosition =
  | 'auto'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch'

export type TypeProps = {
  alignSelf?: TypeFlexPosition
  children: React.ReactNode
  className?: string
  debug?: boolean
  debugColor?: Color
  id?: Theme.TypeLayout
  order?: Theme.TypeSpan
  push?: Theme.TypeSpan
  span: Theme.TypeSpan
}

const ColumnStyle = styled(({ className, children, id, ...rest }: TypeProps) => {
  const dataProps = {}
  Object.keys(rest)
    .filter(key => key.startsWith('data-') || key.startsWith('aria-'))
    .forEach(key => {
      ;(dataProps as any)[key] = rest[key]
    })

  const columnProps = {}
  if (className) (columnProps as any).className = className
  if (id) (columnProps as any).id = id

  return (
    <div {...columnProps} {...dataProps}>
      {children}
    </div>
  )
})`
  box-sizing: border-box;
  width: 100%;
  ${({ order }) =>
    order &&
    order > 0 &&
    css`
      order: ${order};
    `}
  align-self: ${({ alignSelf }) => alignSelf};
  display: flex;
  justify-content: space-between;
  flex-direction: column;

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

      return (
        css`
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
      )
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
        font: 1.2rem sans-serif;
      }
    `}
`

ColumnStyle.defaultProps = {
  order: 0,
}

export default ColumnStyle

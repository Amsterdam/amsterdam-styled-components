import styled, { css } from 'styled-components'
import type { ReactNode } from 'react'
import {
  mediaQuery,
  colCount,
  spanWidth,
  pushWidth,
  margin,
} from '../../utils/grid'
import type { TypeFlexPosition } from '.'
import type { Theme } from '../../types'

export interface TypeProps {
  alignSelf?: TypeFlexPosition
  children: ReactNode
  className?: string
  debug?: boolean
  debugColor?: string
  id?: string
  order?: Theme.TypeSpan
  parentSpan?: Theme.TypeSpan
  push?: Theme.TypeSpan
  span: Theme.TypeSpan
  wrap?: boolean
}

const ColumnStyle = styled(({ className, children, id, ...rest }) => {
  const dataProps = {}
  Object.keys(rest)
    .filter((key) => key.startsWith('data-') || key.startsWith('aria-'))
    .forEach((key) => {
      dataProps[key] = rest[key]
    })

  return (
    <div className={className} id={id} {...dataProps}>
      {children}
    </div>
  )
})`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-self: ${({ alignSelf }: { alignSelf?: string }) => alignSelf};
  justify-content: space-between;

  ${({ wrap }: { wrap?: boolean }) =>
    wrap &&
    css`
      flex-wrap: wrap;
    `}
  ${({ order }: { order?: number }) =>
    order && typeof order !== 'number'
      ? Object.keys(order).map(
          (layoutId) => css`
            @media ${mediaQuery(layoutId)} {
              order: ${order[layoutId]};
            }
          `,
        )
      : css`
          order: ${order};
        `}
  ${({
    debug,
    span,
    parentSpan,
    push = 0,
    theme,
  }: {
    debug?: boolean
    parentSpan?: Theme.TypeSpan
    span: Theme.TypeSpan
    push?: Theme.TypeSpan
    theme: Theme.ThemeInterface
  }) =>
    Object.keys(theme.layouts).map((layoutId) => {
      const spanCount = colCount(span, layoutId)
      const pushCount = colCount(push, layoutId)

      if (spanCount < 1 || pushCount < 0) {
        return null
      }

      return css`
        @media ${mediaQuery(layoutId)} {
          ${debug &&
          css`
            &::before {
              content: 'span ${spanCount}';
            }
          `}
          ${pushCount > 0 &&
          margin(layoutId)({ theme }) > 0 &&
          css`
            margin-left: ${pushWidth({ layoutId, push, parentSpan })};
          `}
          max-width: ${spanWidth({ layoutId, span, parentSpan })};
        }
      `
    })};
  ${({ debug, debugColor }: { debug?: boolean; debugColor?: string }) =>
    debug &&
    css`
      position: relative;
      border: 1px solid;
      border-color: ${debugColor};

      &::before {
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

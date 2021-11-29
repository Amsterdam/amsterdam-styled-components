import type { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

export type Props = {
  order?: number
} & HTMLAttributes<HTMLElement>

export const ListItemStyleCSS = css`
  word-break: break-word;
  margin-bottom: 8px;
`

export default styled.li<Props>`
  ${({ order }) => order && `order: ${order};`}
  ${ListItemStyleCSS}
`

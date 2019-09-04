import styled, { css } from '@datapunt/asc-core'

export type Props = React.HTMLAttributes<HTMLElement>

export const ListItemStyleCSS = css`
  word-break: break-word;
  margin-bottom: 8px;
`

export default styled.li<Props>`
  ${ListItemStyleCSS}
`

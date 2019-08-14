import styled from '@datapunt/asc-core'

export type ListItemStyleProps = React.HTMLAttributes<HTMLElement>

export default styled.li<ListItemStyleProps>`
  word-break: break-word;
  margin-bottom: 8px;
`

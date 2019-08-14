import React from 'react'
import styled from '@datapunt/asc-core'
import { color } from '../../utils'

export interface ListStyleProps
  extends React.HTMLAttributes<HTMLUListElement> {}

export default styled.ul<ListStyleProps>`
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: ${color('tint', 'level1')};
`

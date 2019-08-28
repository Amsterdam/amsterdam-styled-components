import React from 'react'
import styled from '@datapunt/asc-core'
import { themeColor } from '../../utils'

export interface Props extends React.HTMLAttributes<HTMLUListElement> {}

export default styled.ul<Props>`
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: ${themeColor('tint', 'level1')};
`

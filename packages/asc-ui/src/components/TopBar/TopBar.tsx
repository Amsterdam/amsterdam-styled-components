import React from 'react'
import { AscCore } from '@datapunt/asc-core'

const TopBar: React.FC<{}> = ({ children }) => (
  <AscCore.TopBar>{children}</AscCore.TopBar>
)

export default TopBar

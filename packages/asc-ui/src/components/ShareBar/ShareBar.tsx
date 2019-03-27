import React from 'react'
import { AscCore } from '@datapunt/asc-core'

const ShareBar: React.FC<{}> = ({ children }) => (
  <AscCore.ButtonBar padding={0}>{children}</AscCore.ButtonBar>
)

export default ShareBar

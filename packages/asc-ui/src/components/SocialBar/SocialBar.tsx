import React from 'react'
import { AscCore } from '@datapunt/asc-core'

const SocialBar: React.FC<{}> = ({ children }) => (
  <AscCore.ButtonBar>{children}</AscCore.ButtonBar>
)

export default SocialBar

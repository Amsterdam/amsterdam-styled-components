import React from 'react'
import { TopBarStyled } from '@datapunt/asc-core'

const TopBar: React.FC<{}> = ({ children }) => (
  <TopBarStyled>{children}</TopBarStyled>
)

export default TopBar

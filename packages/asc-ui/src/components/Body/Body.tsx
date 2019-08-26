import React from 'react'
import BodyStyle from './BodyStyle'
import { PageLayoutInterface } from '../shared/types'

const Body: React.FC<PageLayoutInterface> = ({ tall, fullWidth, children }) => (
  <BodyStyle {...{ tall, fullWidth }}>{children}</BodyStyle>
)

export default Body

import React from 'react'
import ButtonBar, { Props as ShareBarProps } from '../ButtonBar'

type Props = ShareBarProps

const ShareBar: React.FC<Props> = ({ children, ...otherProps }) => (
  <ButtonBar {...otherProps}>{children}</ButtonBar>
)

export default ShareBar

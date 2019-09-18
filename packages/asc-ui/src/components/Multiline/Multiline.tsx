/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react'
import MultilineStyle, { MultilineStyleProps } from './MultilineStyle'

export interface Props extends MultilineStyleProps {}

const Multiline: React.FC<Props> = ({ children, ...otherProps }) => (
  <MultilineStyle {...otherProps}>{children}</MultilineStyle>
)

export default Multiline

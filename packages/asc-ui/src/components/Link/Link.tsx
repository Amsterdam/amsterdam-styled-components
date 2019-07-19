import { styledComponents } from '@datapunt/asc-core'
import React from 'react'
import LinkStyle from './LinkStyle'

export type Props = styledComponents.StyledProps<any> &
  React.HTMLProps<HTMLAnchorElement>

const Link: React.FC<Props> = ({ children, className, ...otherProps }) => (
  <LinkStyle as="a" className={className} {...otherProps}>
    {children}
  </LinkStyle>
)

export default Link

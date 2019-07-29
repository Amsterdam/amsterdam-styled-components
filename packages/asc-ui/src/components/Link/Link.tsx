import { styledComponents } from '@datapunt/asc-core'
import React from 'react'
import LinkStyle from './LinkStyle'

export type Props = styledComponents.StyledProps<any>

const Link: React.FC<Props> = ({ children, ...otherProps }) => (
  <LinkStyle $as="a" {...otherProps}>
    {children}
  </LinkStyle>
)

export default Link

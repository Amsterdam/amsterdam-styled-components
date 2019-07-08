import React from 'react'
import { styledComponents } from '@datapunt/asc-core'
import HeadingStyle from './HeadingStyle'

const Heading: React.FC<styledComponents.StyledProps<any>> = ({
  children,
  ...otherProps
}) => <HeadingStyle {...otherProps}>{children}</HeadingStyle>

export default Heading

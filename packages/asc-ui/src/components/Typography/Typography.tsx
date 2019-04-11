import React from 'react'
import { AscCore } from '../../styles'

const Typography: React.FC<
  AscCore.Typography.Props & { style?: React.CSSProperties }
> = ({ children, element, ...otherProps }) => {
  const TypographyElement = AscCore.Typography.default(element || 'p')

  return <TypographyElement {...otherProps}>{children}</TypographyElement>
}

export default Typography

import React from 'react'
import { AscCore } from '../../styles'

const Typography: React.FC<
  AscCore.TypographyStyle.Props & { style?: React.CSSProperties }
> = ({ children, element, ...otherProps }) => {
  const TypographyElement = AscCore.TypographyStyle.default(element || 'p')

  return <TypographyElement {...otherProps}>{children}</TypographyElement>
}

export default Typography

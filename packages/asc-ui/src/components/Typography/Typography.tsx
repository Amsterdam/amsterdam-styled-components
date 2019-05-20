import React from 'react'
import TypographyStyle, {
  Props as TypographyStyleProps,
} from './TypographyStyle'

const Typography: React.FC<
  TypographyStyleProps & { style?: React.CSSProperties }
> = ({ children, element, ...otherProps }) => {
  const TypographyElement = TypographyStyle(element || 'p')

  return <TypographyElement {...otherProps}>{children}</TypographyElement>
}

export default Typography

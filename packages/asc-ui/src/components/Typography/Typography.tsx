import React from 'react'
import TypographyStyle, {
  Props as TypographyStyleProps,
} from './TypographyStyle'

const Typography: React.FC<
  TypographyStyleProps & { style?: React.CSSProperties }
> = ({ children, ...otherProps }) => {
  return <TypographyStyle {...otherProps}>{children}</TypographyStyle>
}

export default Typography

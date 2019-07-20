import React from 'react'
import TypographyStyle, {
  Props as TypographyStyleProps,
} from './TypographyStyle'

const Typography: React.FC<
  TypographyStyleProps & { style?: React.CSSProperties }
> = ({ children, className, ...otherProps }) => {
  return (
    <TypographyStyle {...otherProps} className={className}>
      {children}
    </TypographyStyle>
  )
}

export default Typography

import React from 'react'
import TypographyStyle, {
  Props as TypographyStyleProps,
} from './TypographyStyle'

export type Props = TypographyStyleProps & React.HTMLAttributes<HTMLElement>

const Typography: React.FC<Props> = ({ children, ...otherProps }) => (
  <TypographyStyle {...otherProps}>{children}</TypographyStyle>
)

export default Typography

import React from 'react'
import TypographyStyle, {
  Props as TypographyStyleProps,
} from './TypographyStyle'

export type Props = {
  $as?: string
} & TypographyStyleProps &
  React.HTMLAttributes<HTMLElement>

const Typography: React.FC<Props> = ({ children, $as, ...otherProps }) => (
  <TypographyStyle as={$as} {...otherProps}>
    {children}
  </TypographyStyle>
)

export default Typography

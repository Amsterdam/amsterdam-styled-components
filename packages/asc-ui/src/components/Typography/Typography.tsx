import React from 'react'
import TypographyStyle, {
  Props as TypographyStyleProps,
} from './TypographyStyle'

type Props = {
  $as?: string
} & TypographyStyleProps &
  React.HTMLAttributes<HTMLElement>

const Typography: React.FC<Props> = ({
  children,
  gutterBottom,
  paragraph,
  element,
  color,
  fontSize,
  $as,
  ...otherProps
}) => (
  <TypographyStyle
    {...{
      gutterBottom,
      paragraph,
      element,
      color,
      fontSize,
    }}
    as={$as}
    {...otherProps}
  >
    {children}
  </TypographyStyle>
)

export default Typography

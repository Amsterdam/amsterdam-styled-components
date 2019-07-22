import React from 'react'
import TypographyStyle, {
  Props as TypographyStyleProps,
} from './TypographyStyle'

const Typography: React.FC<
  TypographyStyleProps & React.HTMLAttributes<HTMLElement>
> = ({
  children,
  gutterBottom,
  paragraph,
  element,
  color,
  fontSize,
  ...otherProps
}) => {
  return (
    <TypographyStyle
      {...{
        gutterBottom,
        paragraph,
        element,
        color,
        fontSize,
      }}
      {...otherProps}
    >
      {children}
    </TypographyStyle>
  )
}

export default Typography

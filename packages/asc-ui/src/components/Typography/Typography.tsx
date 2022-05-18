import type { HTMLAttributes } from 'react'
import type { Props as TypographyStyleProps } from './TypographyStyle'
import TypographyStyle from './TypographyStyle'

export type Props = TypographyStyleProps & HTMLAttributes<HTMLElement>

function Typography({ children, ...otherProps }: Props) {
  return <TypographyStyle {...otherProps}>{children}</TypographyStyle>
}

export default Typography

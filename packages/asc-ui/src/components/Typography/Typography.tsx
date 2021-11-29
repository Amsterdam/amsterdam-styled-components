import type { FunctionComponent, HTMLAttributes } from 'react'
import type { Props as TypographyStyleProps } from './TypographyStyle'
import TypographyStyle from './TypographyStyle'
import { deprecatedWarning } from '../../utils'

export type Props = TypographyStyleProps & HTMLAttributes<HTMLElement>

const Typography: FunctionComponent<Props> = ({ children, ...otherProps }) => {
  if (otherProps.color) {
    deprecatedWarning(
      'You are using the deprecated `color` prop in the `Typography` component. Please use your own custom style rules',
    )
  }
  return <TypographyStyle {...otherProps}>{children}</TypographyStyle>
}

export default Typography

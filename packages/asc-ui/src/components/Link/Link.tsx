import React from 'react'
import { styledComponents } from '@datapunt/asc-core'
import { ChevronRight } from '@datapunt/asc-assets'
import LinkStyle, { LinkContent, Props as LinkStyleProps } from './LinkStyle'
import Icon from '../Icon'

export type Props = styledComponents.StyledProps<any> & LinkStyleProps

const Link: React.FC<Props> = ({
  children,
  variant: variantProp,
  as,
  linkType,
  ...otherProps
}) => {
  const variant = linkType || variantProp
  return (
    <LinkStyle {...otherProps} variant={variant} forwardedAs={as}>
      {variant === 'with-chevron' && (
        <Icon size={12}>
          <ChevronRight />
        </Icon>
      )}
      {/* Wrap the content in a span if it has a chevron, as this will fix overflow issues in IE11 */}
      {variant === 'with-chevron' ? (
        <LinkContent>{children}</LinkContent>
      ) : (
        children
      )}
    </LinkStyle>
  )
}

Link.defaultProps = {
  as: 'a',
}

export default Link

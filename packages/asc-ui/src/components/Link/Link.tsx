import React from 'react'
import { StyledProps } from 'styled-components'
import { ChevronRight } from '@datapunt/asc-assets'
import LinkStyle, { LinkContent, Props as LinkStyleProps } from './LinkStyle'
import Icon from '../Icon'

export type Props = {
  icon?: React.ReactNode
} & LinkStyleProps &
  StyledProps<any>

const Link: React.FC<Props> = ({
  children,
  variant: variantProp,
  as,
  linkType,
  icon,
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
      {icon && icon}
    </LinkStyle>
  )
}

Link.defaultProps = {
  as: 'a',
}

export default Link

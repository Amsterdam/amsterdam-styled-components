import React from 'react'
import { styledComponents } from '@datapunt/asc-core'
import { ChevronRight } from '@datapunt/asc-assets'
import LinkStyle, { LinkContent, Props as LinkStyleProps } from './LinkStyle'
import Icon from '../Icon'

export type Props = styledComponents.StyledProps<any> & LinkStyleProps

const Link: React.FC<Props> = ({
  children,
  variant: variantProp,
  linkType,
  $as,
  ...otherProps
}) => {
  const variant = linkType || variantProp
  return (
    <LinkStyle $as={$as || 'a'} {...otherProps} variant={variant}>
      {variant === 'with-chevron' && (
        <Icon size={12}>
          <ChevronRight />
        </Icon>
      )}
      <LinkContent>{children}</LinkContent>
    </LinkStyle>
  )
}

export default Link

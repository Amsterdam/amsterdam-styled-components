import React, { FunctionComponent, HTMLAttributes } from 'react'
import BreadcrumbsItemStyle, {
  liProps,
  StyledIcon,
} from './BreadcrumbsItemStyle'
import { ChevronRight } from '@amsterdam/asc-assets'

const BreadcrumbsItem: FunctionComponent<
  liProps & HTMLAttributes<HTMLLIElement>
> = ({ children, href, className, ...otherProps }) => (
  <BreadcrumbsItemStyle className={className} {...otherProps}>
    <StyledIcon size={10}>
      <ChevronRight />
    </StyledIcon>
    <a href={href}>{children}</a>
  </BreadcrumbsItemStyle>
)

export default BreadcrumbsItem

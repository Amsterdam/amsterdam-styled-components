import React, { FunctionComponent, HTMLAttributes } from 'react'
import { ChevronRight } from '@amsterdam/asc-assets'
import BreadcrumbsItemStyle, {
  liProps,
  StyledIcon,
} from './BreadcrumbsItemStyle'

const BreadcrumbsItem: FunctionComponent<
  liProps & HTMLAttributes<HTMLLIElement>
> = ({ children, href, ...otherProps }) => (
  <BreadcrumbsItemStyle {...otherProps}>
    <StyledIcon size={14}>
      <ChevronRight />
    </StyledIcon>
    <a href={href}>{children}</a>
  </BreadcrumbsItemStyle>
)

export default BreadcrumbsItem

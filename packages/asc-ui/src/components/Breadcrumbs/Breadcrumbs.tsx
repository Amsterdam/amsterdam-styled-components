import React, { FunctionComponent, HTMLAttributes } from 'react'
import { ChevronRight } from '@amsterdam/asc-assets'
import BreadcrumbsStyle, { StyledIcon } from './BreadcrumbsStyle'

const Breadcrumbs: FunctionComponent<HTMLAttributes<HTMLUListElement>> = ({
  children,
  className,
  ...otherProps
}) => (
  <BreadcrumbsStyle className={className} {...otherProps}>
    {React.Children.map(children, (child, index) => (
      <React.Fragment key={String(index)}>
        {children instanceof Array && index > 0 && index < children.length && (
          <StyledIcon size={10}>
            <ChevronRight />
          </StyledIcon>
        )}
        {child}
      </React.Fragment>
    ))}
  </BreadcrumbsStyle>
)

export default Breadcrumbs

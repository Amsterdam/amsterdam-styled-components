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
      <React.Fragment key={index}>
        {child}
        {children instanceof Array && index < children.length - 1 && (
          <StyledIcon size={10}>
            <ChevronRight />
          </StyledIcon>
        )}
      </React.Fragment>
    ))}
  </BreadcrumbsStyle>
)

export default Breadcrumbs

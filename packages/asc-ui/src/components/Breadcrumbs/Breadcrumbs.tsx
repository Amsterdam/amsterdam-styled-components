import React, { FunctionComponent, HTMLAttributes } from 'react'
import { ChevronRight } from '@amsterdam/asc-assets'
import BreadcrumbsStyle, { StyledIcon } from './BreadcrumbsStyle'

const Breadcrumbs: FunctionComponent<HTMLAttributes<HTMLUListElement>> = ({
  children,
  ...otherProps
}) => (
  <BreadcrumbsStyle {...otherProps}>
    {React.Children.map(children, (child, index) => (
      <React.Fragment key={String(index)}>
        <li>
          <StyledIcon size={10}>
            <ChevronRight />
          </StyledIcon>
          {child}
        </li>
      </React.Fragment>
    ))}
  </BreadcrumbsStyle>
)

export default Breadcrumbs

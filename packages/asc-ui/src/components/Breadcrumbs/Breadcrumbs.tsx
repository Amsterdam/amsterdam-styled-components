import type { HTMLAttributes } from 'react'
import { Children } from 'react'
import { ChevronRight } from '@amsterdam/asc-assets'
import BreadcrumbsStyle, { StyledIcon } from './BreadcrumbsStyle'

function Breadcrumbs({
  children,
  ...otherProps
}: HTMLAttributes<HTMLOListElement>) {
  return (
    <BreadcrumbsStyle {...otherProps}>
      {Children.map(children, (child, index) => (
        <li>
          {index !== 0 && (
            <StyledIcon size={10}>
              <ChevronRight />
            </StyledIcon>
          )}
          {child}
        </li>
      ))}
    </BreadcrumbsStyle>
  )
}

export default Breadcrumbs

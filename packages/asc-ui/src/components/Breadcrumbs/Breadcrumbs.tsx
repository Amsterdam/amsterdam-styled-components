import React, { FunctionComponent, HTMLAttributes } from 'react'
import BreadcrumbsStyle, { StyledIcon } from './BreadcrumbsStyle'
import { ChevronRight } from '@datapunt/asc-assets'
import { themeColor } from '@datapunt/asc-ui'

const Breadcrumbs: FunctionComponent<HTMLAttributes<HTMLUListElement>> = ({
  children,
  ...otherProps
}) => (
  <BreadcrumbsStyle {...otherProps}>
    {React.Children.map(children, (child, index) => (
      <React.Fragment key={String(index)}>
        {child}
        {children instanceof Array && index < children.length - 1 && (
          <StyledIcon size={14} color={themeColor('tint', 'level5')}>
            <ChevronRight />
          </StyledIcon>
        )}
      </React.Fragment>
    ))}
  </BreadcrumbsStyle>
)

export default Breadcrumbs

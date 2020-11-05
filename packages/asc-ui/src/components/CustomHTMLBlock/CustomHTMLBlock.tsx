import React, { FunctionComponent } from 'react'
import CustomHTMLBlockStyle from './CustomHTMLBlockStyle'

type Props = {
  body?: string
}

const CustomHTMLBlock: FunctionComponent<Props> = ({
  body,
  children,
  ...otherProps
}) => (
  <CustomHTMLBlockStyle
    {...(!children && body
      ? { dangerouslySetInnerHTML: { __html: body } }
      : {})}
    {...otherProps}
  >
    {children}
  </CustomHTMLBlockStyle>
)

export default CustomHTMLBlock

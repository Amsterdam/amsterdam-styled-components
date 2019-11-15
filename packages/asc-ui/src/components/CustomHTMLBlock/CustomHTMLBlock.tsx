import React from 'react'
import CustomHTMLBlockStyle from './CustomHTMLBlockStyle'

type Props = {
  body: string
}

const CustomHTMLBlock: React.FC<Props> = ({ body, ...otherProps }) => (
  <CustomHTMLBlockStyle
    dangerouslySetInnerHTML={{
      __html: body,
    }}
    {...otherProps}
  />
)

export default CustomHTMLBlock

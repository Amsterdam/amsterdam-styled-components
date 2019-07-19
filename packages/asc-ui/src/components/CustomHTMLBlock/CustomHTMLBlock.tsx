import React from 'react'
import CustomHTMLBlockStyles from './CustomHTMLBlockStyle'

type Props = {
  body: string
}

const CustomHTMLBlock: React.FC<Props> = ({ body }) => (
  <CustomHTMLBlockStyles
    dangerouslySetInnerHTML={{
      __html: body,
    }}
  />
)

export default CustomHTMLBlock

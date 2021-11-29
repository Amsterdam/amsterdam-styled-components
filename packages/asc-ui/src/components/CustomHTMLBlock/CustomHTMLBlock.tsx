import type { FunctionComponent } from 'react'
import CustomHTMLBlockStyle from './CustomHTMLBlockStyle'

interface Props {
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

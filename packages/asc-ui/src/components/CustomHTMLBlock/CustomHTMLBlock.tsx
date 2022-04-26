import CustomHTMLBlockStyle from './CustomHTMLBlockStyle'

interface Props {
  body?: string
}

function CustomHTMLBlock({ body, children, ...otherProps }: Props) {
  return (
    <CustomHTMLBlockStyle
      {...(!children && body
        ? { dangerouslySetInnerHTML: { __html: body } }
        : {})}
      {...otherProps}
    >
      {children}
    </CustomHTMLBlockStyle>
  )
}

export default CustomHTMLBlock

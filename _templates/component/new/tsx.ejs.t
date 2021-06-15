---
to: packages/asc-ui/src/components/<%= parent %>/<%=name%>/<%=name%>.tsx
---
import { FunctionComponent, HTMLAttributes } from 'react'
import <%=name%>Style, { <%=tag%>Props } from './<%=name%>Style'

const <%=name%>: FunctionComponent<<%=tag%>Props & HTMLAttributes<HTMLElement>> = ({ children, ...otherProps }) => (
  <<%=name%>Style {...otherProps}>{children}</<%=name%>Style>
)

export default <%=name%>


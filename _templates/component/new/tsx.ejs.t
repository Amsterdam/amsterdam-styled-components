---
to: packages/asc-ui/src/components/<%= parent %>/<%=name%>/<%=name%>.tsx
---
import React from 'react'
import <%=name%>Style from './<%=name%>Style'

type Props = {}

const <%=name%>: React.FC<Props> = ({ children }) => (
  <<%=name%>Style>{children}</<%=name%>Style>
)

export default <%=name%>


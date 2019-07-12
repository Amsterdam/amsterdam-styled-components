---
to: packages/asc-ui/src/components/<%= parent %>/<%=name%>/index.ts
---
import <%=name%>Style from './<%=name%>Style'
export { default as <%=name%> } from './<%=name%>'

const <%=name%>Styles = {
  <%=name%>Style,
}
export {
  <%=name%>Styles
}

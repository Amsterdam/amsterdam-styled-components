---
to: packages/asc-ui/src/components/<%= parent %>/<%=name%>/<%=name%>.test.tsx
---
import <%=name%> from './<%=name%>'

describe('<%=name%>', () => {
  it('should render', () => {
      const { container } = render(
        <<%=name%>>Foo</<%=name%>>,
      )
      expect(container.firstChild).toBeDefined()
    })
})


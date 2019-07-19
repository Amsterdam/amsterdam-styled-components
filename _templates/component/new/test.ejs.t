---
to: packages/asc-ui/src/components/<%= parent %>/<%=name%>/<%=name%>.test.tsx
---
import * as React from 'react'
import <%=name%> from './<%=name%>'
import { renderWithTheme } from '../../utils/withTheme'
import 'jest-styled-components'

describe('<%=name%>', () => {
  it('should render', () => {
    const component = renderWithTheme(<<%=name%>>Foo</<%=name%>>)

    expect(component).toMatchSnapshot()
  })
})


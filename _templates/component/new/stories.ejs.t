---
to: "<%= story ? `packages/asc-ui/src/components/${parent}/${name}/${name}.stories.tsx` : null %>"
skip_if: <%= story %>
---

import React from 'react'
import <%= name %> from './<%= name %>'

export default {
  title: '<%= composed ? 'Composed' : 'Atoms' %>/<%= name %>',

  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
    ),
  ],
}


export const DefaultState = () => <<%= name %> />

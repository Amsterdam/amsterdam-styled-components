---
to: "<%= story ? `packages/asc-ui/src/components/${parent}/${name}/${name}.story.tsx` : null %>"
skip_if: <%= story %>
---

import React from 'react'
import { storiesOf } from '@storybook/react'
import <%= name %> from './<%= name %>'

storiesOf('<%= composed ? 'Composed' : 'Atom' %>/<%= name %>', module)
  .add('default state', () => (
    <<%= name %> />
  ))

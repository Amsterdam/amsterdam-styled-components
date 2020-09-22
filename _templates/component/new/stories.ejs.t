---
to: "<%= story ? `stories/src/ui/${name}.stories.mdx` : null %>"
skip_if: <%= story %>
---

import styled from 'styled-components'
import { Meta, Story, Preview } from '@storybook/addon-docs/blocks'
import { <%= name %> } from '@amsterdam/asc-ui'

export const Decorator = styled.div`
`

<Meta
  title="UI/<%= name %>"
  component={<%= name %>}
  decorators={[(storyFn) => <Decorator>{storyFn()}</Decorator>]}
/>

# <%= name %>

[Design System](https://designsystem.amsterdam.nl/LINK_HERE)

## Default

<Preview>
  <Story name="Default">
    <React.Fragment>
      <<%= name %>>Default state</<%= name %>>
    </React.Fragment>
  </Story>
</Preview>

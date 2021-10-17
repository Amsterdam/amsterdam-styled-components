---
to: "<%= story ? `stories/src/ui/${name}.stories.mdx` : null %>"
skip_if: <%= story %>
---

import { Fragment } from 'react'
import styled from 'styled-components'
import { Meta, Story, Canvas } from '@storybook/addon-docs'
import { <%= name %> } from '@amsterdam/asc-ui'

export const Decorator = styled.div`
`

<Meta
  title="UI/<%= name %>"
  component={<%= name %>}
  decorators={[(StoryComponent) => <Decorator><StoryComponent /></Decorator>]}
/>

# <%= name %>

[Design System](https://designsystem.amsterdam.nl/LINK_HERE)

## Default

<Canvas>
  <Story name="Default">
    <Fragment>
      <<%= name %>>Default state</<%= name %>>
    </Fragment>
  </Story>
</Canvas>

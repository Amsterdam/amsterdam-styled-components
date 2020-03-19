import * as React from 'react'
import Link from './Link'

export default {
  title: 'Experimental/Atoms/Typography/Link',

  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ padding: '40px 10px', background: 'rgb(248,248,248,0.8)' }}>
        {storyFn()}
      </div>
    ),
  ],
}

export const DefaultType = () => (
  <Link href="/">I am a &quot;default&quot; link without chevron icon!</Link>
)

export const DefaultTypeWithChevronIcon = () => (
  <Link href="/" variant="with-chevron">
    I am a default link!
  </Link>
)

export const InlineTypeInternalLink = () => (
  <Link href="/" variant="inline">
    I am a &quot;inline&quot; link!
  </Link>
)

InlineTypeInternalLink.story = {
  name: 'Inline type (internal link)',
}

export const BlankTypeHasNoStyle = () => (
  <Link href="/" variant="blank">
    I am a &quot;blank&quot; link! I have no style. I can be used for adding
    link functionality to components.
  </Link>
)

BlankTypeHasNoStyle.story = {
  name: 'blank type (has no style)',
}

import * as React from 'react'
import Tag from './Tag'

export default {
  title: 'Atoms/Typography/Tag',

  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ padding: '40px 20px' }}>{storyFn()}</div>
    ),
  ],
}

export const DefaultStyle = () => (
  <>
    <Tag>Tag one</Tag>
    <br />
    <Tag colorType="tint" colorSubtype="level3">
      Tag two
    </Tag>
    <br />
    <Tag colorType="secondary">Tag three</Tag>
  </>
)

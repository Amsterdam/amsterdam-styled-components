import React from 'react'
import Blockquote from './Blockquote'

export default {
  title: 'Experimental/Atoms/Typography/Blockquote',

  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
    ),
  ],
}

export const DefaultStyle = () => (
  <Blockquote>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deleniti
    dicta doloremque eveniet explicabo id ipsum omnis placeat rerum suscipit.
  </Blockquote>
)

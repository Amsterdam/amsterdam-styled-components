import React from 'react'
import { action } from '@storybook/addon-actions'
import Input from './Input'

export default {
  title: 'Experimental/Atoms/Input',

  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
    ),
  ],
}

export const ControlledState = () => {
  const [text, setText] = React.useState('')

  return (
    <Input
      id="test-id"
      onBlur={action('onBlur called')}
      onChange={(e) => {
        setText(e.target.value)
        action(`onChange called: ${text}`)
      }}
      onFocus={action('onFocus called')}
      onKeyDown={action('onKeyDown called')}
      value={text}
    />
  )
}

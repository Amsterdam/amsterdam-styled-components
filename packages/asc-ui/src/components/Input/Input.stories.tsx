import { action } from '@storybook/addon-actions'
import React, { createRef, useEffect } from 'react'
import Input from './Input'
import Readme from './README.md'

export default {
  title: 'Experimental/Atoms/Input',
  parameters: {
    notes: Readme,
  },
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

export const InputWithRef = () => {
  const ref = createRef<HTMLInputElement>()

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return undefined
    }

    function onInput(event: Event) {
      // eslint-disable-next-line no-console
      console.log('Value changed!', (event.target as HTMLInputElement).value)
    }

    if (!element) {
      return undefined
    }

    element.addEventListener('input', onInput)

    return () => {
      element.removeEventListener('input', onInput)
    }
  }, [ref])

  return <Input id="with-ref" ref={ref} />
}

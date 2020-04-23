import React, { createRef, useEffect } from 'react'
import Readme from './README.md'
import TextArea from './TextArea'

export default {
  title: 'Experimental/Atoms/TextArea',
  parameters: {
    notes: Readme,
  },
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
    ),
  ],
}

export const Default = () => {
  return <TextArea value="Some text in the textarea" />
}

export const TextAreaWithRef = () => {
  const ref = createRef<HTMLTextAreaElement>()

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

  return <TextArea ref={ref} />
}

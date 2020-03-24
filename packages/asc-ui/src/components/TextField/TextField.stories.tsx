import React, { useState } from 'react'
import TextField from './TextField'

export default {
  title: 'Experimental/Atoms/TextField',

  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
    ),
  ],
}

export const DefaultState = () => <TextField />
export const WithALabel = () => <TextField label="A Label" />
export const WithAControlledState = () => {
  const [value, setValue] = useState('A value')
  return (
    <>
      {' '}
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />{' '}
      <br /> The user types: {value}{' '}
    </>
  )
}
export const WithAPlaceholder = () => <TextField placeholder="A value" />
export const WithAnError = () => <TextField errorMessage="Error message only" />
export const WithAnAccessibleLabelForScreenReader = () => (
  <TextField srOnly id="text-filed-id" />
)

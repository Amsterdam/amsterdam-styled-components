import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import TextField from './TextField'

const props = {
  onBlur: action('onBlur'),
  onFocus: action('onFocus'),
  onKeyDown: action('onKeyDown'),
  value: '',
}

const TextFieldComponent: React.FC<{
  label?: string
  errorMessage?: string
}> = ({ label, errorMessage }) => {
  const [text, setText] = React.useState('')

  return (
    <TextField
      {...props}
      value={text}
      id="text-filed-id"
      label={label}
      errorMessage={errorMessage}
      onChange={e => setText(e.target.value)}
      onClear={() => setText('')}
    />
  )
}

const TextFieldSrOnlyComponent: React.FC<{}> = () => {
  const [text, setText] = React.useState('')

  return (
    <TextField
      {...props}
      srOnly
      id="text-filed-id"
      value={text}
      onChange={e => setText(e.target.value)}
      onClear={() => setText('')}
    />
  )
}

storiesOf('Atoms/TextField', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('default state', () => (
    <>
      <TextFieldComponent label="Text field label" />

      <br />
      <br />
      <em>Without label:</em>
      <TextFieldComponent />
    </>
  ))
  .add('default state with label and error', () => (
    <>
      <TextFieldComponent
        label="Text field label"
        errorMessage="Error message"
      />
      <br />
      <TextFieldComponent errorMessage="Error message only" />
    </>
  ))
  .add('default state with accesible label for screen reader', () => (
    <TextFieldSrOnlyComponent />
  ))

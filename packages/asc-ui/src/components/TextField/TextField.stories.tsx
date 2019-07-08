import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import TextField from './TextField'

const props = {
  label: 'text field description',
  onBlur: action('onBlur'),
  onFocus: action('onFocus'),
  onKeyDown: action('onKeyDown'),
  value: '',
}

const TextFieldComponent: React.FC<{}> = () => {
  const [text, setText] = React.useState('')

  return (
    <TextField
      {...props}
      value={text}
      id="text-filed-id"
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
  .add('default state with label', () => <TextFieldComponent />)
  .add('default state with accesible label for screen reader', () => (
    <TextFieldSrOnlyComponent />
  ))

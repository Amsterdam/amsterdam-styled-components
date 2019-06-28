import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import TextField from './TextField'

const props = {
  label: 'description',
  onBlur: action('onBlur'),
  onChange: action('onChange'),
  onClear: action('onClear'),
  onFocus: action('onFocus'),
  onKeyDown: action('onKeyDown'),
  value: '',
}

const TextFieldComponent: React.FC<{}> = () => <TextField {...props} />

const TextFieldSrOnlyComponent: React.FC<{}> = () => (
  <TextField {...props} srOnly />
)

storiesOf('Atoms/TextField', module)
  .add('default state with label', () => <TextFieldComponent />)
  .add('default state with accesible label for screen reader', () => (
    <TextFieldSrOnlyComponent />
  ))

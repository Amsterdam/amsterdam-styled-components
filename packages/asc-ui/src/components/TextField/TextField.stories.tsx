import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import TextField from './TextField'

const TextFieldComponent: React.FC<{}> = () => (
  <TextField
    id="test-id"
    label="description"
    onBlur={action('onBlur')}
    onChange={action('onChange')}
    onFocus={action('onFocus')}
    onKeyDown={action('onKeyDown')}
    value=""
  />
)

const TextFieldSrOnlyComponent: React.FC<{}> = () => (
  <TextField
    id="test-id"
    label="description"
    srOnly
    onBlur={action('onBlur')}
    onChange={action('onChange')}
    onFocus={action('onFocus')}
    onKeyDown={action('onKeyDown')}
    value=""
  />
)

storiesOf('Atoms/TextField', module)
  .add('default state with label', () => <TextFieldComponent />)
  .add('default state with accesible label for screen reader', () => (
    <TextFieldSrOnlyComponent />
  ))

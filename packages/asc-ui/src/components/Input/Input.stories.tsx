import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Input from './Input'

const InputComponent: React.FC<{}> = () => {
  const [text, setText] = React.useState('')

  return (
    <Input
      id="test-id"
      onBlur={action('onBlur called')}
      onChange={e => {
        setText(e.target.value)
        action(`onChange called: ${text}`)
      }}
      onFocus={action('onFocus called')}
      onKeyDown={action('onKeyDown called')}
      value={text}
    />
  )
}

storiesOf('Atoms/Input', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('default state', () => <InputComponent />)

import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Input from './Input'

const inputRef = React.createRef()

const InputComponent: React.FC<{}> = () => (
  <>
    <Input
      onChange={action('onChange')}
      onKeyDown={action('onKeyDown')}
      inputRef={inputRef}
    />
  </>
)

storiesOf('Atoms/Input', module).add('default state', () => <InputComponent />)

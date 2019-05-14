import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Input from './Input'

const InputComponent: React.FC<{}> = () => (
  <>
    <Input
      onChange={action('onChange')}
      onKeyDown={action('onKeyDown')}
      value=""
    />
  </>
)

storiesOf('Atoms/Input', module).add('default state', () => <InputComponent />)

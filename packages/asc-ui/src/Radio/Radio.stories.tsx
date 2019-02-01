import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ButtonBar } from '@amsterdam/asc-core'
import Radio from './Radio'

storiesOf('Radio', module).add('All radios', () => (
  <div>
    <Radio id="female" name="name1" value="female" />
    <Radio id="male" name="name1" value="male" />
  </div>
))

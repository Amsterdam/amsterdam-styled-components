import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ButtonBar } from '@amsterdam/asc-core'
import Radio from './Radio'

storiesOf('Radio', module).add('All radios', () => (
  <div>
    <Radio id="female" name="gender" value="female" label="Vrouw" />
    <Radio id="male" name="gender" value="male" label="Man" />
    <Radio id="none" name="gender" value="none" label="Geen van beide" disabled />
  </div>
))

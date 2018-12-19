import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Radio } from '@amsterdam/asc-core'

storiesOf('Radio', module).add('All Radios', () => (
  <div>
    <Radio id="radio-1" name="gender" value="female" label="Vrouw" defaultChecked />
    <Radio id="radio-2" name="gender" value="male" label="Man" />
    <Radio id="radio-3" name="gender" value="none" label="Onzijdig" disabled />
  </div>
))

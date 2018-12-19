import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Radios, Radio } from '@amsterdam/asc-core'

storiesOf('Radios', module).add('All Radios', () => (
  <div>
    <Radios name="gender">
      <Radio value="female" label="Vrouw" defaultChecked />
      <Radio value="male" label="Man" />
      <Radio value="none" label="Onzijdig" disabled />
    </Radios>

    <Radios name="volwassen" orientation="horizontal">
      <Radio value="no" label="Nee" />
      <Radio value="sometimes" label="Soms" />
      <Radio value="never" label="Nooit" />
    </Radios>
  </div>
))

import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { AscCore } from '@datapunt/asc-core'
import Radio from './Radio'

storiesOf('Radio', module).add('All radios', () => (
  <div>
    <AscCore.RadioGroup>
      <Radio id="female" name="gender" value="female" label="Vrouw" />
      <Radio id="male" name="gender" value="male" label="Man" />
      <Radio id="none" name="gender" value="none" label="Geen van beide" disabled />
    </AscCore.RadioGroup>

    <AscCore.RadioGroup orientation="horizontal">
      <Radio id="female2" name="gender2" value="female" label="Vrouw 2" />
      <Radio id="male2" name="gender2" value="male" label="Man 2" />
      <Radio id="none2" name="gender2" value="none" label="Geen van beide 2" disabled />
    </AscCore.RadioGroup>
  </div>
))

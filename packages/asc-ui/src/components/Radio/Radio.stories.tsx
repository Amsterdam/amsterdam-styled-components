import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Radio, { RadioGroup } from './Radio'

storiesOf('Radio', module).add('All radios', () => (
  <div>
    <RadioGroup>
      <Radio id="female" name="gender" value="female" label="Vrouw" />
      <Radio id="male" name="gender" value="male" label="Man" />
    </RadioGroup>

    <RadioGroup orientation="horizontal">
      <Radio id="female2" name="gender2" value="female" label="Vrouw 2" />
      <Radio id="male2" name="gender2" value="male" label="Man 2" />
    </RadioGroup>
  </div>
))

/*
      <Radio id="none" name="gender" value="none" label="Geen van beide" disabled />
      <Radio id="none2" name="gender2" value="none" label="Geen van beide 2" disabled />
*/

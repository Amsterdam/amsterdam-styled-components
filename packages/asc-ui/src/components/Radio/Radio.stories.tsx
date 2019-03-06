import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Radio } from '../..'

storiesOf('Radio', module).add('All radios', () => (
  <div>
    <Radio.RadioGroup>
      <Radio.default id="female" value="female" label="Vrouw" />
      <Radio.default id="male" value="male" label="Man" />
      <Radio.default id="none" value="none" label="Geen van beide" disabled />
    </Radio.RadioGroup>

    <Radio.RadioGroup orientation="horizontal">
      <Radio.default id="female2" value="female" label="Vrouw 2" />
      <Radio.default id="male2" value="male" label="Man 2" />
      <Radio.default
        id="none2"
        value="none"
        label="Geen van beide 2"
        disabled
      />
    </Radio.RadioGroup>
  </div>
))

import React from 'react'
import { storiesOf } from '@storybook/react'
import { Select, Option } from '../..'

storiesOf('Selection', module).add('Default', () => (
  <Select small id="hello">
    <Option.default id="listbox1-1" className="selected" aria-selected="true">
      Green
    </Option.default>
    <Option.default id="listbox1-2">Orange</Option.default>
  </Select>
))
